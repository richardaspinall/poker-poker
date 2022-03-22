import { Server, Socket } from 'socket.io';

import SocketServer from '../SocketServer';
import { GameController } from '../game/GameController';
import Player from '../player/Player';
import tablesRepo from './TableRepo';

export default (io: Server, socket: Socket) => {
  const tableView = (tableName: string) => {
    socket.join(tableName);
  };

  const tableJoin = (tableName: string, seatNumber: string) => {
    const table = tablesRepo.getTable(tableName);

    if (table) {
      table.addPlayer(seatNumber, new Player(socket, false));
      SocketServer.emitToTable('table:join', tableName, { seat: seatNumber });
      GameController.playerJoin(table);
    }
  };

  socket.on('table:view', tableView);

  socket.on('table:join', tableJoin);
};
