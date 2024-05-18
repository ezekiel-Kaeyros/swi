// socket.ts

import { Server } from 'socket.io';
import { Events } from './constants';
const users = {};

export default (httpServer: any)  => {
  console.log('start socket io init');
  
  const io = new Server(httpServer, {
    cors: {
          origin: '*',
        }
  });

  io.on('connection', (socket: any) => {
    console.log('Socket connection. socket.connected: ', socket.connected);
    socket.broadcast.emit('hi');

    socket.on('chat message', (msg: any) => {
      io.emit('chat message', msg);
    });

    socket.on('receive position', (data: any) => {
      console.log('Data received from client:', data);
      io.emit(`send position${data.agentManagerID}`, data);
      // Do something with the received data
    });

    socket.on('receive realtime coordinate', (data: any) => {
      console.log("Real time coordinates: ", data);
      io.emit(`send coordinates${data.receiver}`, data);
    })
    
    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
  });
};
