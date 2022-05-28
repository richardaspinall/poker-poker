// eslint-disable-next-line no-undef
var socket = io('/');

let seatNumber;
let tableNumber = 'table1';

/* SOCKET OUTGOING EVENTS */

// Automatically emit that a player is viewing the table (hardcoded table number for now)
socket.emit('table:view', tableNumber);

// Notify that the player has joined a table (clicked on a seat to join), then remove the event listeners for the other seats
function joinTable() {
  socket.emit('table:join', tableNumber, this.id);

  seatNumber = this.id;

  document.querySelectorAll('.seat').forEach((seat) => {
    seat.removeEventListener('click', joinTable);
  });

  const playerActions = document.getElementById('player-actions');

  const leaveTableButton = document.createElement('button');
  leaveTableButton.setAttribute('id', 'leave-table');
  leaveTableButton.setAttribute('class', 'action-buttons');
  leaveTableButton.innerHTML = `Leave`;

  leaveTableButton.addEventListener('click', leaveTable);

  playerActions.appendChild(leaveTableButton);
}

function leaveTable() {
  socket.emit('table:leave', tableNumber, seatNumber, () => {
    console.log('test');
  });

  const seat = document.getElementById(seatNumber);
  seat.innerHTML = `Empty`;

  const playerActions = document.getElementById('player-actions');
  const leaveTableButton = document.getElementById('leave-table');
  playerActions.removeChild(leaveTableButton);
  addSeatListeners();
}

/* SOCKET INCOMING EVENTS */

// Player joined the table, display icon
socket.on('player:joined', ({ seatId }) => {
  console.log(seatId);
  const seat = document.getElementById(seatId);
  seat.innerHTML = `
  <div class="player">
      <div class="head"></div>
      <div class="body"></div>
  </div>
  <div class="hole-cards">
      <div class="card-1"></div>
      <div class="card-2"></div>
  </div>
  `;
});

// Player left the table, remove icon
socket.on('player:left', ({ seatId }) => {
  console.log(seatId);
  const seat = document.getElementById(seatId);
  seat.innerHTML = `Empty`;
});

// Add listener to each seat
function addSeatListeners() {
  document.querySelectorAll('.seat').forEach((seat) => {
    seat.addEventListener('click', joinTable);
  });
}

addSeatListeners();
