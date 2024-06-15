const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const { verifySocketUser } = require('./middlewares/verifySocketUser');

dotenv.config();
const port = process.env.PORT || 3001;
const { connectDB } = require('./db/conn');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const playerRoutes = require('./routes/player');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const Player = require('./models/Player');
const User = require('./models/User');
const { ApiError } = require('./utils/ApiError');
connectDB();

// Middlewares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors());

// Routers
app.use('/api/auth', authRoutes);
app.use('/api/player', playerRoutes);

// Create HTTP server
const server = http.createServer(app);

// Create Socket.IO instance
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000', // Adjust the origin to match your frontend URL
        credentials: true,
    },
});

// Add this middleware function to authenticate Socket.IO connections
io.use(async (socket, next) => {
    verifySocketUser(socket, next);
});

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.user.username} just connected!`);

    socket.on('connect', () => {
        console.log('🔥: A user connected');
    });

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    socket.on('bid', async (data) => {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            if (!data || !data.productId || !data.currentPrice) {
                console.log('Please provide all data productId,currentPrice data Provided');
                socket.emit('bidRejected', { message: 'Please provide all data productId,currentPrice data Provided' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            const player = await Player.findById(data.productId).session(session);
            if (!player) {
                console.log('Product not found.');
                socket.emit('bidRejected', { message: 'Product not found.' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            if (player.endTime < new Date().getTime()) {
                console.log('Bidding time is over.');
                socket.emit('bidRejected', { message: 'Bidding time is over.' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            if (data.currentPrice <= player.currentPrice) {
                console.log('Bid must be higher than the current highest bid.');
                socket.emit('bidRejected', { message: 'Bid must be higher than the current highest bid.' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            const userId = new ObjectId(socket.user._id); // Ensure userId is an ObjectId
            const user = await User.findById(userId).session(session);
            console.log("user", user);
            if (!user) {
                console.log('User not found.');
                socket.emit('bidRejected', { message: 'User not found.' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            console.log(`Adding bid: userId=${userId}, currentPrice=${data.currentPrice}`);

            // Ensure all bidderId values in bids are ObjectIds
            for (let bid of player.bids) {
                if (!(bid.bidderId instanceof ObjectId)) {
                    bid.bidderId = new ObjectId(bid.bidderId);
                }
            }

            player.bids.push({
                bidderId: userId,
                bidAmount: data.currentPrice,
                biddingTime: new Date().getTime()
            });
            player.currentPrice = data.currentPrice;
            await player.save();
            console.log('Bid placed successfully.');

            await session.commitTransaction();
            session.endSession();

            io.emit('bidPlaced', {
                message: `A Bid of ${data.currentPrice} has been placed by ${socket.user.username}`,
                data: {
                    productId: player._id,
                    currentPrice: player.currentPrice,
                    bidderId: userId,
                }
            });
            console.log('Bid placed successfully.');
        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            console.error('Error placing bid:', error);
        }
    });
});

server.listen(port, () => {
    console.log(`Server started on ${port}`);
});
