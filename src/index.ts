import path from 'path';
import express from 'express';

import { createServer } from 'http';

import SocketServer from './SocketServer';
import session, { Session } from 'express-session';

declare module 'http' {
  interface IncomingMessage {
    session: Session & {
      authenticated: boolean;
    };
  }
}

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const sessionMiddleware = session({
  secret: 'changeit',
  resave: false,
  saveUninitialized: false,
});

app.use(sessionMiddleware);

// Authenticate the session
app.post('/login', (req, res) => {
  req.session.authenticated = true;
  res.redirect('/');
});

httpServer.listen(3000);

SocketServer.initialize(httpServer, sessionMiddleware);
