import { Server, Socket } from 'socket.io';

import tablesRepo from '../table/TableRepo';

import GameController from '../game/GameController';
import SocketServer from '../SocketServer';

export default (io: Server, socket: Socket) => {
  const playerReady = (tableName: string) => {
    const table = tablesRepo.getTable(tableName);

    if (table) {
      const player = table.getPlayer(socket);
      if (player) {
        player.setIsReady(true);
      }
      GameController.emit('player:ready', table);
    }
  };

  const playerFold = (tableName: string, seatNumber: string) => {
    const table = tablesRepo.getTable(tableName);

    if (table) {
      const player = table.getPlayer(socket);

      if (player) {
        try {
          player.fold(table);
          GameController.emit('player:fold', player, table, seatNumber);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  socket.on('player:ready', playerReady);
  socket.on('player:fold', playerFold);
};
