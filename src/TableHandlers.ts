import { Server, Socket } from 'socket.io';

import Table from './game/Table';
import Player from './game/Player';
import Game from './game/GameController';

// tables is just an array of two Tables for now
import tables from './game/tables';

export default (io: Server, socket: Socket) => {
  const tableView = (tableName: string) => {
    socket.join(tableName);
  };

  const tableJoin = (tableName: string, seatNumber: string) => {
    io.to(tableName).emit('table:join', seatNumber);

    const table = getTable(tableName);
    if (table) {
      table.addPlayer(seatNumber, new Player(socket, true));
      if (Game.checkPlayersAreReady(table)) {
        Game.newHand(table);
      }
    }
  };

  socket.on('table:view', tableView);
  socket.on('table:join', tableJoin);
};

export function getTable(tableName: string): Table | null {
  for (const table of tables) {
    if (table.tableName == tableName) {
      return table;
    }
  }
  return null;
}
