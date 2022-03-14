import Player from '../player/Player';

export default class Seat {
  seatNumber: string;
  player?: Player;
  constructor(seatNumber: string) {
    this.seatNumber = seatNumber;
  }

  addPlayer(player: Player) {
    this.player = player;
  }
}
