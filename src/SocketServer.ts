import { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import registerTableEvents from './TableHandlers';

export default class SocketServer {
  private static io: IOServer;

  // Creates our Socket Server and registers appropriate events
  public static initialize(httpServer: HttpServer) {
    if (!this.io) {
      this.io = new IOServer(httpServer, {
        /* options */
      });

      const onConnection = (socket: Socket) => {
        registerTableEvents(this.io, socket);
      };

      this.io.on('connection', onConnection);
    } else {
      throw Error('Server already initialized');
    }
  }
}
