import { EventEmitter } from 'events';
import Game from './Game';
import SocketServer from '../SocketServer';

class GameController extends EventEmitter {}

const gameController = new GameController();

gameController.on('player:ready', (table) => {
  if (table.checkPlayersAreReady()) {
    Game.newHand(table);
  }
});

gameController.on('player:join', (table) => {
  if (table.checkPlayersAreReady()) {
    Game.newHand(table);
  }
});

gameController.on('player:fold', (player, table, seatNumber) => {
  // This logic should go in the Game class, and a TRY CATCH should be done here / error handling
  // For example: the player isn't the acting player
  SocketServer.emitToTable('player:fold', table.tableName, { seat: seatNumber });

  Game.endTurn(player, table);
});

export default gameController;
