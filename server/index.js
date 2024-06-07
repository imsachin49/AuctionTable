const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http'); // Added
const socketIo = require('socket.io'); // Added

dotenv.config();
const port = process.env.PORT || 3001;
const { connectDB } = require('./db/conn');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const playerRoutes = require('./routes/player');
const bidRoutes = require('./routes/bid');
const mongoose = require('mongoose');
const Player = require('./models/Player');
const Bid = require('./models/Bid');
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
app.use('/api/bid', bidRoutes);

// Create HTTP server
const server = http.createServer(app);

// Create Socket.IO instance
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000', // Adjust the origin to match your frontend URL
        credentials: true,
    },
});

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('connect', () => {
        console.log('🔥: A user connected');
    });

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    // adding async..
    socket.on('bid', async(data) => {
        if(!data) return;
        // if(!data.productId || !data.currentPrice || !data.userId) return;

        // const player=await Player.findById(data.productId);
        // if(!player) return;

        // if(data.currentPrice<=player.currentPrice) return;
        
        // const newBid = new Bid({
        //     bidderId: data.userId,
        //     playerId: data.productId,
        //     bidAmount: data.currentPrice,
        //     // bidding time in milliseconds
        //     bidingTime: new Date().getTime()
        // });

        // await newBid.save();

        // console.log('🔥: Bid placed');
        // console.log(data);

        // logics for bid update in DB and verified user to add bid..

        socket.broadcast.emit('bidPlaced', { message: `Bid placed by user`, data });
    });
});


// Start the server
server.listen(port, () => {
    console.log(`Server started on ${port}`);
});
