import path from 'path';
import express from 'express';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import registerTableHandlers from './TableHandlers';
import registerPlayerActionHandlers from './PlayerActionHandlers';

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const io = new Server(httpServer, {
  /* options */
});

const onConnection = (socket: Socket) => {
  registerTableHandlers(io, socket);
  registerPlayerActionHandlers(io, socket);
};

io.on('connection', onConnection);

httpServer.listen(3000);
