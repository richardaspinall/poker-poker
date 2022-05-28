import SocketClient from './SocketClient.js';

import { joinTable, leaveTable } from './playerActionHandlers.js';
import { addPlayerIcon, removePlayerIcon } from './clientAnimation.js';

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
