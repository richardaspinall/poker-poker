// eslint-disable-next-line no-undef
import { dealCards } from './dealer.js';
let socket = io('/');
let seatNumber;
let tableNumber = 'table1';
socket.emit('table:view', tableNumber);

document.querySelectorAll('.seat').forEach((seat) => {
  seat.addEventListener('click', function() {
    socket.emit('table:join', tableNumber, this.id);
    seatNumber = this.id;
  });
});

document.getElementById('fold-action').addEventListener('click', function() {
  socket.emit('player:fold', tableNumber, seatNumber);
});

document.getElementById('ready-action').addEventListener('click', function() {
  socket.emit('player:ready', tableNumber);
});

socket.on('table:join', (playerSeatNumber) => {
  const seat = document.getElementById(playerSeatNumber);
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

socket.on('player:fold', (playerSeatNumber) => {
  document.getElementById(playerSeatNumber).innerHTML = `
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
