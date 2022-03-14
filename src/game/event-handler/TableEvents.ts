import { Server, Socket } from 'socket.io';

import Player from '../Player';

// tables is just an array of two Tables for now
import tablesRepo from '../tablesRepo';

export default (io: Server, socket: Socket) => {
  const tableView = (tableName: string) => {
    socket.join(tableName);
  };

  const tableJoin = (tableName: string, seatNumber: string) => {
    const table = tablesRepo.getTable(tableName);

    if (table) {
      table.addPlayer(seatNumber, new Player(socket, false));
      io.to(tableName).emit('table:join', seatNumber);
    }
  };

  socket.on('table:view', tableView);
  socket.on('table:join', tableJoin);
};
