import { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import registerPlayerEvents from './player/PlayerController';
import registerTableEvents from './table/TableController';

export default class SocketServer {
  private static io: IOServer;

  public static getInstance() {
    return SocketServer.io;
  }

  public static initialize(httpServer: HttpServer) {
    if (!this.io) {
      this.io = new IOServer(httpServer, {
        /* options */
      });

      const onConnection = (socket: Socket) => {
        registerTableEvents(this.io, socket);
        registerPlayerEvents(this.io, socket);
      };

      this.io.on('connection', onConnection);
    } else {
      throw Error('Server already initialized');
    }
  }

  public static emitToTable(event: string, tableName: string, args: object) {
    this.io.to(tableName).emit(event, args);
  }
}
