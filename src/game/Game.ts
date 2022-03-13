import Player from './Player';
import Dealer from './Dealer';
import Table from './Table';

export default class Game {
  public static startHand(table: Table) {
    const players = table.getPlayers();
    if (players) {
      Dealer.dealCards(players);
    }
    console.log(table.seats);
  }

  public static checkPlayers(table: Table) {
    const players = table.getPlayers();

    let count = 0;
    if (players) {
      players.forEach((player) => {
        if (player.ready) {
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
