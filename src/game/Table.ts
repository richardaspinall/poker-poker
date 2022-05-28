import Seat from './Seat';

class Table {
  private tableName: string;
  private seats: Seat[];

  public constructor(tableName: string, numSeats: number) {
    this.tableName = tableName;
    this.seats = [];
    for (let seatNumber = 1; seatNumber <= numSeats; seatNumber++) {
      this.seats.push(new Seat(`seat-${seatNumber}`));
    }
  }

  public getTableName() {
    return this.tableName;
  }

  public getSeats() {
    return this.seats;
  }

  addPlayer(seatNumber: string) {
    for (const seat of this.seats) {
      if (seat.seatNumber == seatNumber) {
        seat.isTaken = true;
      }
    }
  }
}

const table1 = new Table('table1', 9);

export default table1;
