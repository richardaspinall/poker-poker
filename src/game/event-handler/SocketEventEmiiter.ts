import { Server } from 'socket.io';

export default class SocketEventEmitter {
  static io: SocketEventEmitter;

  private constructor() {
    console.log('constructor called!');
  }

  public static getInstance(): SocketEventEmitter {
    if (!SocketEventEmitter.io) {
      SocketEventEmitter.io = new SocketEventEmitter();
    }
    return SocketEventEmitter.io;
  }

  //   public emitTable(tableName) {
  //     this.io.to(tableName).emit('player:fold', seatNumber);
  //   }
}
