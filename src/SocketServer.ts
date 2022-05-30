import express, { Request, Response, NextFunction } from 'express';
import { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import registerTableEvents from './TableHandlers';

export default class SocketServer {
  private static io: IOServer;

  // Creates our Socket Server and registers appropriate events
  public static initialize(httpServer: HttpServer, sessionMiddleware: express.RequestHandler) {
    if (!this.io) {
      this.io = new IOServer(httpServer, {
        /* options */
      });

      this.io.use((socket, next) => {
        sessionMiddleware(socket.request as Request, {} as Response, next as NextFunction);
      });

      this.io.use((socket, next) => {
        const session = socket.request.session;
        if (session && session.authenticated) {
          next();
        } else {
          next(new Error('unauthorized'));
          console.log('Unauthorized session');
        }
      });

      const onConnection = (socket: Socket) => {
        console.log(socket.request.session);
        registerTableEvents(this.io, socket);
      };

      this.io.on('connection', onConnection);
    } else {
      throw Error('Server already initialized');
    }
  }
}
