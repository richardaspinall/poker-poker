import { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import eventHandler from './game/event-handler';

export default class SocketServer {
  static io: IOServer;

  public static getInstance() {
    return SocketServer.io;
  }

  public static initialize(httpServer: HttpServer) {
    if (!this.io) {
      this.io = new IOServer(httpServer, {
        /* options */
      });

      const onConnection = (socket: Socket) => {
        eventHandler.registerTableEvents(this.io, socket);
        eventHandler.registerPlayerEvents(this.io, socket);
      };

      this.io.on('connection', onConnection);
    } else {
      throw Error('Server already initialized');
    }
  }

  //   public emitTable(tableName) {
  //     this.io.to(tableName).emit('player:fold', seatNumber);
  //   }
}
