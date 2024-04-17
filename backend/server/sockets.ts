import { Server } from 'socket.io';
import { Events } from './constants';
const users = {};


export default (httpServer: any) => {
  console.log('start socket io init');
  
  const io = new Server(httpServer);

  io.on('connection', (socket: any) => {
    console.log('Socket connection. socket.connected: ', socket.connected);
    socket.broadcast.emit('hi');
    /**
     * Notifications.
     */
    socket.on('chat message', (msg: any) => {
      io.emit('chat message', msg);
    });
    socket.on(Events.SEND_POSITIONS, (data: any) => {
      io.emit(Events.RECIEVE_POSITIONS, data);
     
    });
    
    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
  });
};
