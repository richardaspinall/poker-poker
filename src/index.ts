import path from 'path';
import express from 'express';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import eventHandler from './game/event-handler';
const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const io = new Server(httpServer, {
  /* options */
});

const onConnection = (socket: Socket) => {
  eventHandler.registerTableHandlers(io, socket);
  eventHandler.registerPlayerActionHandlers(io, socket);
};

io.on('connection', onConnection);

httpServer.listen(3000);
