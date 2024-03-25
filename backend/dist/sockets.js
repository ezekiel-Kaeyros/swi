"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var constants_1 = require("./constants");
var users = {};
exports.default = (function (httpServer) {
    var io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: process.env.FRONTEND_URL,
            methods: ['GET', 'POST'],
            credentials: true,
        },
    });
    io.use(function (socket, next) {
    });
    io.on('connection', function (socket) {
        console.log('Socket connection. socket.connected: ', socket.connected);
        /**
         * Notifications.
         */
        socket.on(constants_1.Events.CREATE_NOTIFICATION, function (data) {
        });
        socket.on('disconnect', function () {
            console.log('Socket disconnected');
        });
    });
});
