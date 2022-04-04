import { Socket } from 'socket.io';
import Table from '../table/Table';

// This is a model of the player on the table
// An end user of the system could be on multiple tables
// and each table would have its own player instance
export default class Player {
  holeCards = {};
  socket: Socket;
  socketId: string;
  isReady: boolean;

  constructor(socket: Socket, isReady: boolean) {
    this.socket = socket;
    this.socketId = socket.id;
    this.isReady = isReady;
  }

  setIsReady(isReady: boolean) {
    this.isReady = isReady;
  }

  setHoleCards(holeCards: any) {
    this.holeCards = holeCards;
  }

  // Change to remove hole cards
  // Error when not your turn should be where we implement and figure out proper error handling
  fold(table: Table) {
    if (table.actingPlayer == this) {
      this.holeCards = {};
    } else {
      throw Error('Not your turn');
    }
  }

  // The below two calls will be merged into one and this would simply change the player's chip count
  call(table: Table) {
    console.log('Player calls');
  }

  raise(table: Table, amount: number) {
    console.log('Player raise');
  }
}
