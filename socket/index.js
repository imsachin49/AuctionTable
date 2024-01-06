const { Server } = require('socket.io');

const io = new Server(8000, {
    cors: true,
});

const users=[];

io.on('connection', (socket) => {    
    console.log('a user connected');

    // a user is disconnected
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
