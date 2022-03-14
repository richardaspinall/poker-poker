import Table from '../table/Table';
import Hand from './Hand';

export default class Dealer {
  public static deal(hand: Hand, table: Table) {
    const seats = table.seats;
    const playerSeatNumbers: string[] = [];

    seats.forEach((seat) => {
      if (seat.player && seat.player.isReady) {
        playerSeatNumbers.push(seat.seatNumber);
      }
    });

    const players = table.getAllPlayers();

    players.forEach((player) => {
      player.setHoleCards({
        card1: hand.deck[Math.floor(Math.random() * 12)],
        card2: hand.deck[Math.floor(Math.random() * 12)],
      });

      player.socket.emit('cards', player.holeCards, playerSeatNumbers);
    });
  }
}
