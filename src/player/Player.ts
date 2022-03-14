import { Socket } from 'socket.io';
import Table from '../table/Table';

export default class Player {
  holeCards = {};
  socket: Socket;
  isReady: boolean;

  constructor(socket: Socket, isReady: boolean) {
    this.socket = socket;
    this.isReady = isReady;
  }

  setIsReady(isReady: boolean) {
    this.isReady = isReady;
  }

  setHoleCards(holeCards: any) {
    this.holeCards = holeCards;
  }

  fold(table: Table) {
    if (table.actingPlayer == this) {
      this.holeCards = {};
    } else {
      throw Error('Not your turn');
    }
  }

  call(table: Table) {
    console.log('Player calls');
  }

  raise(table: Table, amount: number) {
    console.log('Player raise');
  }
}
