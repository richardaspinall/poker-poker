import { Socket } from 'socket.io';

export default class Player {
  holeCards = {};
  socket: Socket;
  ready: boolean;
  constructor(socket: Socket, ready: boolean) {
    this.socket = socket;
    this.ready = ready;
  }

  setHoleCards(holeCards: any) {
    this.holeCards = holeCards;
    this.socket.emit('cards', this.holeCards);
  }
}
