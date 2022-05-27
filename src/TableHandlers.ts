import { Server, Socket } from 'socket.io';

export default (io: Server, socket: Socket) => {
  const tableView = (tableName: string) => {
    socket.join(tableName);
  };

  const tableJoin = (tableName: string, seatNumber: string) => {
    io.to(tableName).emit('player:joined', seatNumber);
  };

  const tableLeave = (tableName: string, seatNumber: string) => {
    io.to(tableName).emit('player:left', seatNumber);
  };

  socket.on('table:view', tableView);
  socket.on('table:join', tableJoin);
  socket.on('table:leave', tableLeave);
};
