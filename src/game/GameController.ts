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
  console.log('test');
  if (table.checkPlayersAreReady()) {
    Game.newHand(table);
  }
});

gameController.on('player:fold', (player, table, seatNumber) => {
  player.removeHoleCards();
  SocketServer.emitToTable('player:fold', table.tableName, { seat: seatNumber });
  Game.endTurn(player, table);
});

export default gameController;
