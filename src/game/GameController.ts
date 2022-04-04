import { Socket } from 'socket.io';
import SocketServer from '../SocketServer';
import Game from './Game';
import Table from '../table/Table';
import tablesRepo from '../table/TableRepo';

export class GameController {
  public static playerReady(socket: Socket, tableName: string) {
    const table = tablesRepo.getTable(tableName);
    if (table) {
      const player = table.getPlayer(socket.id);
      if (player) {
        player.setIsReady(true);
      }
      if (table.checkPlayersAreReady()) {
        Game.newHand(table);
      }
    }
  }

  // This needs to change into a generic "move" or "playerOption" function which calls the implemented
  // Game option (from the game state)
  // This will become more apparent when we get to Phase 3 and try implement a new game type
  public static playerFold(socket: Socket, tableName: string, seatNumber: string) {
    const table = tablesRepo.getTable(tableName);
    if (table) {
      const player = table.getPlayer(socket.id);
      if (player) {
        try {
          player.fold(table);

          // This logic should go in the Game class, and a TRY CATCH should be done here / error handling
          // For example: the player isn't the acting player
          SocketServer.emitToTable('player:fold', table.tableName, { seat: seatNumber });

          Game.endTurn(player, table);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  public static playerJoin(table: Table) {
    if (table.checkPlayersAreReady()) {
      Game.newHand(table);
    }
  }
}

export default (socket: Socket) => {
  socket.on('player:join', (table) => {
    GameController.playerJoin(table);
  });
  socket.on('player:ready', (tableName) => {
    GameController.playerReady(socket, tableName);
  });
  socket.on('player:fold', (tableName, seatNumber) => {
    GameController.playerFold(socket, tableName, seatNumber);
  });
};
