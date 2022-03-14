import Dealer from './Dealer';
import Hand from './Hand';
import Table from '../table/Table';
import Player from '../player/Player';

export default class Game {
  public static newHand(table: Table) {
    const players = table.getAllPlayers();
    const deck = ['AS', 'AD', 'AC', 'AH', 'KS', 'KD', 'KS', 'KC', 'QS', 'QH', 'QD', 'QC'];
    const hand = new Hand(deck);

    if (players) {
      Dealer.deal(hand, table);
    }
  }

  public static endTurn(player: Player, table: Table) {
    const players = table.getAllPlayers();

    // Get all players and check if more than 1 player has cards, if not, end hand
    //
  }
}
