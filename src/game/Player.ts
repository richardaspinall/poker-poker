import { Socket } from 'socket.io';

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

  removeHoleCards() {
    this.holeCards = {};
  }
}
