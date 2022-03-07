import { Server, Socket } from 'socket.io';

import Table from './game/Table';
import Player from './game/Player';
import Game from './game/Game';

const table = new Table('table1', 9);

export default (io: Server, socket: Socket) => {
  const tableView = (tableName: string) => {
    socket.join(tableName);
  };

  const tableJoin = (tableName: string, seatNumber: string) => {
    io.to(tableName).emit('table:join', seatNumber);

    table.addPlayer(seatNumber, new Player(socket, true));

    if (Game.checkPlayers(table)) {
      Game.startHand(table);
    }
  };

  socket.on('table:view', tableView);
  socket.on('table:join', tableJoin);
};
