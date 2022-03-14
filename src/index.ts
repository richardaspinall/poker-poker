import path from 'path';
import express from 'express';

import { createServer } from 'http';

import SocketServer from './SocketServer';

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

httpServer.listen(3000);

SocketServer.initialize(httpServer);
