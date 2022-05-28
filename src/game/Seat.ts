export default class Seat {
  seatNumber: string;
  isTaken = false;
  constructor(seatNumber: string) {
    this.seatNumber = seatNumber;
  }
}
