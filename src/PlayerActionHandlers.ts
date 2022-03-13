import { Server, Socket } from 'socket.io';

import { getTable } from './TableHandlers';

import Game from './game/GameController';

export default (io: Server, socket: Socket) => {
  socket.on('player:fold', (tableName: string, seatNumber: string) => {
    const table = getTable(tableName);

    if (table) {
      const player = table.getPlayer(socket);
      if (player) {
        player.removeHoleCards();
        io.to(tableName).emit('player:fold', seatNumber);
        Game.endTurn(player, table);
      }
    }
  });
  socket.on('player:ready', (tableName: string) => {
    const table = getTable(tableName);

    if (table) {
      const player = table.getPlayer(socket);
      if (player) {
        player.setIsReady(true);
      }
      if (Game.checkPlayersAreReady(table)) {
        Game.newHand(table);
      }
    }
  });
};
