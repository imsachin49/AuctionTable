const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const cookieParser = require('cookie-parser');
const { verifySocketUser } = require('./middlewares/verifySocketUser');
const { connectDB } = require('./db/conn');
const { placeBid } = require('./services/bidService');

const authRoutes = require('./routes/auth');
const playerRoutes = require('./routes/player');

const port = process.env.PORT || 3001;
dotenv.config();

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

// Socket.IO event listeners
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.user.username} just connected!`);

    socket.on('connect', () => {
        console.log('🔥: A user connected');
    });

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    socket.on('bid', async (data) => {
        await placeBid(socket, data, io);
    });
});

server.listen(port, () => {
    console.log(`Server started on ${port}`);
});