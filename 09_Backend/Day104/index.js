const { Server } = require('socket.io');
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const server = http.createServer(app);
const io = new Server(server);
server.listen(3000, () => {
    console.log('listening on 3000');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    
    // socket.on('message', (msg) => {
    //     socket.broadcast.emit('new-message', msg);
    // });

    socket.on('message', ({room, msg}) => {
        socket.to(room).emit('new-message', msg);
    });

    socket.on('join-room', (room) => {
        socket.join(room);
    });
});