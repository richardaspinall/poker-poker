import SocketClient from './SocketClient.js';

import { joinTable, leaveTable } from './playerActionHandlers.js';
import { addPlayerIcon, refreshTableState, removePlayerIcon } from './clientAnimation.js';

// Add join table listeners to each seat
document.querySelectorAll('.seat').forEach((seat) => {
  seat.addEventListener('click', joinTable);
});

// Add leave table listener
document.getElementById('leave-table').addEventListener('click', leaveTable);

// Player joined the table, display icon
SocketClient.addSocketEventListener('player:joined', addPlayerIcon);

// Player left the table, remove icon
SocketClient.addSocketEventListener('player:left', removePlayerIcon);

// Player has joined the table and needs to see the current state of it
SocketClient.addSocketEventListener('table:refresh', refreshTableState);
