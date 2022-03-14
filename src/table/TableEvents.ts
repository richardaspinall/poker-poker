import { Server, Socket } from 'socket.io';

import tableController from './TableController';

export default (io: Server, socket: Socket) => {
  socket.on('table:view', (tableName: string) => {
    tableController.tableView(tableName, socket);
  });

  socket.on('table:join', (tableName: string, seatNumber: string) => {
    tableController.tableJoin(tableName, seatNumber, socket);
  });
};
