const { Server } = require('socket.io');
const app = require('express');
const http = require('http');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    }
    );
    socket.on('message', (msg) => {
        io.emit('new-message', msg);
    }
    );
});