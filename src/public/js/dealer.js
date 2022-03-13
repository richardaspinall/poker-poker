// Create facedown cards for opponent players
const faceDownCard = new Image();
faceDownCard.src = 'images/cards/FacedownSingle.svg';

// Timer
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

// Display opponent facedown cards one player at a time with a 200ms delay between (dealing)
async function dealCards(seatNumber, holeCards, playerSeatNumbers) {
  for (var i = 0; i < playerSeatNumbers.length; i++) {
    if (seatNumber == playerSeatNumbers[i]) {
      const cardValue = holeCards.card1;
      // Cards
      // Create card 1
      const card = new Image();
      card.src = `images/cards/${cardValue}.svg`;

      // Show player cards
      document.querySelector(`#${seatNumber} .hole-cards .card-1`).append(card);
    } else {
      document.querySelector(`#${playerSeatNumbers[i]} .hole-cards .card-1`).append(faceDownCard.cloneNode(true));
    }
    await timer(200);
  }

  for (var i = 0; i < playerSeatNumbers.length; i++) {
    if (seatNumber == playerSeatNumbers[i]) {
      const cardValue = holeCards.card2;
      // Cards
      // Create card 1
      const card = new Image();
      card.src = `images/cards/${cardValue}.svg`;

      // Show player cards
      document.querySelector(`#${seatNumber} .hole-cards .card-2`).append(card);
    } else {
      document.querySelector(`#${playerSeatNumbers[i]} .hole-cards .card-2`).append(faceDownCard.cloneNode(true));
    }
    await timer(200);
  }
}

export { dealCards };
