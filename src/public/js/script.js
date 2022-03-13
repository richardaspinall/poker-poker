// eslint-disable-next-line no-undef
import { dealCards, foldCards } from './dealer.js';
let socket = io('/');
socket.emit('table:view', 'table1');

let seatNumber;

document.querySelectorAll('.seat').forEach((seat) => {
  seat.addEventListener('click', function() {
    socket.emit('table:join', 'table1', this.id);
    seatNumber = this.id;
  });
});

document.getElementById('fold-action').addEventListener('click', function() {
  socket.emit('player:fold', 'table1', seatNumber);
});

document.getElementById('ready-action').addEventListener('click', function() {
  socket.emit('player:ready', 'table1');
});

socket.on('table:join', (seatNumber) => {
  const seat = document.getElementById(seatNumber);
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

socket.on('cards', (holeCards, playerSeatNumbers) => {
  dealCards(seatNumber, holeCards, playerSeatNumbers);
});

socket.on('player:fold', (seatNumber) => {
  document.getElementById(seatNumber).innerHTML = `
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
