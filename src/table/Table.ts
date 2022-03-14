import { Socket } from 'socket.io';
import Hand from '../game/Hand';
import Player from '../player/Player';
import Seat from './Seat';

export default class Table {
  tableName: string;
  seats: Seat[];
  hand?: Hand;
  actingPlayer?: Player;

  constructor(tableName: string, numSeats: number) {
    this.tableName = tableName;
    this.seats = [];
    for (let seatNumber = 1; seatNumber <= numSeats; seatNumber++) {
      this.seats.push(new Seat(`seat-${seatNumber}`));
    }
  }

  setHand(hand: Hand) {
    this.hand = hand;
  }

  getHand() {
    return this.hand;
  }

  setActingPlayer(actingPlayer: Player) {
    this.actingPlayer = actingPlayer;
  }

  getActingPlayer(): Player | undefined {
    return this.actingPlayer;
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

  checkPlayersAreReady(): boolean {
    const players = this.getAllPlayers();

    let count = 0;
    if (players) {
      players.forEach((player) => {
        if (player.isReady) {
          count++;
        }
      });
    }

    if (count > 1) {
      return true;
    }
    return false;
  }
}
