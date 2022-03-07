import Player from './Player';
import Seat from './Seat';

export default class Table {
  tableName: string;
  seats: Seat[];

  constructor(tableName: string, numSeats: number) {
    this.tableName = tableName;
    this.seats = [];
    for (let seatNumber = 1; seatNumber <= numSeats; seatNumber++) {
      this.seats.push(new Seat(`seat-${seatNumber}`));
    }
  }

  addPlayer(seatNumber: string, player: Player) {
    const seat: Seat | undefined = this.seats.find((element) => element.seatNumber === seatNumber);

    if (seat) {
      seat.addPlayer(player);
    } else {
      throw new Error('Seat not found');
    }
  }

  getPlayers() {
    const players: Player[] = [];
    this.seats.forEach((seat: Seat) => {
      if (seat.player) {
        players.push(seat.player);
      }
    });
    if (players) {
      return players;
    }
  }
}
