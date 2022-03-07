// eslint-disable-next-line no-undef
var socket = io('/');
socket.emit('table:view', 'table1');

function tableJoin() {
  socket.emit('table:join', 'table1', this.id);
}

document.querySelectorAll('.seat').forEach((seat) => {
  seat.addEventListener('click', tableJoin);
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
