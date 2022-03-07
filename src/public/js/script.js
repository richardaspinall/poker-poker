// eslint-disable-next-line no-undef
let socket = io('/');
socket.emit('table:view', 'table1');

let seatNumber;
function tableJoin() {
  socket.emit('table:join', 'table1', this.id);
  seatNumber = this.id;
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

socket.on('cards', (holeCards) => {
  console.log(holeCards);

  const card1 = new Image();
  card1.src = `images/cards/${holeCards.card1}.svg`;
  const card2 = new Image();
  card2.src = `images/cards/${holeCards.card2}.svg`;

  // Show player cards
  document.querySelector(`#${seatNumber} .hole-cards .card-1`).append(card1);
  document.querySelector(`#${seatNumber} .hole-cards .card-2`).append(card2);
});
