"use strict";
// socket.ts
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var users = {};
exports.default = (function (httpServer) {
    console.log('start socket io init');
    var io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: '*',
        }
    });
    io.on('connection', function (socket) {
        console.log('Socket connection. socket.connected: ', socket.connected);
        socket.broadcast.emit('hi');
        socket.on('chat message', function (msg) {
            io.emit('chat message', msg);
        });
        socket.on('receive position', function (data) {
            console.log('Data received from client:', data);
            io.emit("send position".concat(data.agentManagerID), data);
            // Do something with the received data
        });
        socket.on('receive realtime coordinate', function (data) {
            console.log("Real time coordinates: ", data);
            io.emit("send coordinates".concat(data.receiver), data);
        });
        socket.on('disconnect', function () {
            console.log('Socket disconnected');
        });
    });
});
