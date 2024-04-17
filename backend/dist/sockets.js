"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var constants_1 = require("./constants");
var users = {};
exports.default = (function (httpServer) {
    console.log('start socket io init');
    var io = new socket_io_1.Server(httpServer);
    io.on('connection', function (socket) {
        console.log('Socket connection. socket.connected: ', socket.connected);
        socket.broadcast.emit('hi');
        /**
         * Notifications.
         */
        socket.on('chat message', function (msg) {
            io.emit('chat message', msg);
        });
        socket.on(constants_1.Events.SEND_POSITIONS, function (data) {
            io.emit(constants_1.Events.RECIEVE_POSITIONS, data);
        });
        socket.on('disconnect', function () {
            console.log('Socket disconnected');
        });
    });
});
