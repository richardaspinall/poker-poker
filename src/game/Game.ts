import Dealer from './Dealer';
import Hand from './Hand';
import Table from './Table';
import Player from './Player';

export default class Game {
  public static checkPlayersAreReady(table: Table) {
    const players = table.getAllPlayers();

    let count = 0;
    if (players) {
      players.forEach((player) => {
        if (player.isReady) {
          count++;
        }
      });
    }

    if (count == 3) {
      return true;
    }
    return false;
  }

  public static newHand(table: Table) {
    const players = table.getAllPlayers();
    const deck = ['AS', 'AD', 'AC', 'AH', 'KS', 'KD', 'KS', 'KC', 'QS', 'QH', 'QD', 'QC'];
    const hand = new Hand(deck, table, players[0]);

    if (players) {
      Dealer.deal(hand);
    }
  }

  public static endTurn(player: Player, table: Table) {
    const players = table.getAllPlayers();

    // Get all players and check if more than 1 player has cards, if not, end hand
    //
  }
}
