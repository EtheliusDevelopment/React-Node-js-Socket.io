const express = require('express');
const http = require('http');
const socket = require('socket.io')


const app = express();

const server = http.createServer(app);

const io = socket(server);


io.on('connection', socket =>{
    socket.emit('your id', socket.id)
    socket.on("send message", body => {
        io.emit("message", body)
    })
})



server.listen(8000, ()=> console.log("server is running on port 8000 http://localhost:8000"));