const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("offer", (offer) => {
        socket.broadcast.emit("offer", offer);
    });

    socket.on("answer", (answer) => {
        socket.broadcast.emit("answer", answer);
    });

    socket.on("candidate", (candidate) => {
        socket.broadcast.emit("candidate", candidate);
    });

    socket.on("disconnect", (disconnect) => {
        socket.broadcast.emit("disconnect", disconnect);
    });

    server.listen(3000, () => console.log("Signaling server running on port 3000"));
    
})