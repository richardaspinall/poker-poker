import { Socket } from 'socket.io';
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
    for (const seat of this.seats) {
      if (seat.seatNumber == seatNumber) {
        seat.addPlayer(player);
      }
    }
  }

  getPlayer(socket: Socket): Player | null {
    for (const seat of this.seats) {
      if (seat.player?.socket == socket) {
        return seat.player;
      }
    }

    return null;
  }

  getAllPlayers(): Player[] {
    const players: Player[] = [];
    this.seats.forEach((seat: Seat) => {
      if (seat.player) {
        players.push(seat.player);
      }
    });
    return players;
  }
}
