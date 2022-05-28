import { Socket } from 'socket.io';
import TableController from './game/TableController';

export default (socket: Socket) => {
  socket.on('table:view', (tableName: string) => {
    socket.join(tableName);
  });

  socket.on('table:join', TableController.tableJoin);
  socket.on('table:leave', TableController.tableLeave);
};
