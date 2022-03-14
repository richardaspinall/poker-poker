import { Server, Socket } from 'socket.io';
import SocketServer from '../SocketServer';
import GameController from '../game/GameController';

import Player from '../player/Player';

import tablesRepo from './TableRepo';

export default {
  tableView: (tableName: string, socket: Socket) => {
    socket.join(tableName);
  },

  tableJoin: (tableName: string, seatNumber: string, socket: Socket) => {
    const table = tablesRepo.getTable(tableName);

    if (table) {
      table.addPlayer(seatNumber, new Player(socket, false));
      SocketServer.emitToTable('table:join', tableName, { seat: seatNumber });
      GameController.emit('table:join', table);
    }
  },
};
