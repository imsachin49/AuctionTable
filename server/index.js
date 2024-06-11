const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http'); // Added
const socketIo = require('socket.io'); // Added
const {verifySocketUser}=require('./middlewares/verifySocketUser');

dotenv.config();
const port = process.env.PORT || 3001;
const { connectDB } = require('./db/conn');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const playerRoutes = require('./routes/player');
const mongoose = require('mongoose');
const Player = require('./models/Player');
const User=require('./models/User');
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
    console.log(`⚡: ${socket.id} user just connected!`, socket.user);

    socket.on('connect', () => {
        console.log('🔥: A user connected');
    });

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    // adding async..
    socket.on('bid', async (data) => {
        const session = await mongoose.startSession();
        session.startTransaction();

        // adding db transaction here to ensure that if bid is pushed then price should be updated
        try {
            if (!data || !data.productId || !data.currentPrice) {
                socket.emit('bidRejected', { message: 'Please provide all data productId,currentPrice data Provided' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            const player = await Player.findById(data.productId).session(session);
            if (!player) {
                socket.emit('bidRejected', { message: 'Product not found.' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            // check if time is over
            if (player.endTime < new Date().getTime()) {
                socket.emit('bidRejected', { message: 'Bidding time is over.' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            // Check if the new bid is higher than the current highest bid
            if (data.currentPrice <= player.currentPrice) {
                socket.emit('bidRejected', { message: 'Bid must be higher than the current highest bid.' });
                await session.abortTransaction();
                session.endSession();
                return;
            }

            player.bids.push({
                bidderId: socket.user._id,
                bidAmount: data.currentPrice,
                biddingTime: new Date().getTime()
            });

            player.currentPrice = data.currentPrice;
            await player.save();

            // Commit the transaction
            await session.commitTransaction();
            session.endSession();

            // Emit to all connected clients
            io.emit('bidPlaced', {
                message: `Bid placed by user`,
                data: {
                    productId: player._id,
                    currentPrice: player.currentPrice,
                    bidderId: socket.user._id,
                }
            });
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