import { Server, Socket } from 'socket.io';

type tableDTO = {
  tableName: string;
  seatNumber?: string;
};
export default (io: Server, socket: Socket) => {
  const tableView = (args: tableDTO) => {
    const dto = args;
    socket.join(dto.tableName);
  };

  const tableJoin = (args: tableDTO) => {
    const dto = args;
    io.to(dto.tableName).emit('player:joined', dto.seatNumber);
  };

  const tableLeave = (args: tableDTO) => {
    const dto = args;
    io.to(dto.tableName).emit('player:left', dto.seatNumber);
  };

  socket.on('table:view', tableView);
  socket.on('table:join', tableJoin);
  socket.on('table:leave', tableLeave);
};
