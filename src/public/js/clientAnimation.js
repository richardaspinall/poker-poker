export function addPlayerIcon(seatId) {
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
}

export function removePlayerIcon(seatId) {
  const seat = document.getElementById(seatId);
  seat.innerHTML = `Empty`;
}

export function refreshTableState(table) {
  table.forEach((seat) => {
    if (seat.isTaken) {
      console.log(seat);
      addPlayerIcon(seat.seatNumber);
    }
  });
}
