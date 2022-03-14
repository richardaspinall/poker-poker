import Player from './Player';
import Table from './Table';

export default class Hand {
  deck: string[];
  table: Table;
  actingPlayer: Player;

  constructor(deck: string[], table: Table, actingPlayer: Player) {
    this.deck = deck;
    this.table = table;
    this.actingPlayer = actingPlayer;
  }

  setActingPlayer(actingPlayer: Player) {
    this.actingPlayer = actingPlayer;
  }

  getActingPlayer(): Player {
    return this.actingPlayer;
  }

  drawCard() {
    return this.deck.pop;
  }
}
