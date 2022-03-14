import Hand from './Hand';

export default class Dealer {
  public static deal(hand: Hand) {
    const seats = hand.table.seats;
    const playerSeatNumbers: string[] = [];

    seats.forEach((seat) => {
      if (seat.player && seat.player.isReady) {
        playerSeatNumbers.push(seat.seatNumber);
      }
    });

    const players = hand.table.getAllPlayers();

    players.forEach((player) => {
      player.setHoleCards({
        card1: hand.deck[Math.floor(Math.random() * 12)],
        card2: hand.deck[Math.floor(Math.random() * 12)],
      });

      player.socket.emit('cards', player.holeCards, playerSeatNumbers);
    });
  }
}
