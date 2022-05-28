import SocketClient from './SocketClient.js';

let seatNumber;
let tableName = 'table1';

// Automatically emit that a player is viewing the table (hardcoded table number for now)
SocketClient.emit('table:view', { tableName });

// Notify that the player has joined a table (clicked on a seat to join), then remove the event listeners for the other seats
export function joinTable() {
  if (seatNumber) {
    alert('Already seated!');
  } else {
    seatNumber = this.id;
    SocketClient.emit('table:join', { tableName, seatNumber });
  }
}

export function leaveTable() {
  if (!seatNumber) {
    alert('Not seated!');
  } else {
    SocketClient.emit('table:leave', { tableName, seatNumber });
    seatNumber = null;
  }
}
