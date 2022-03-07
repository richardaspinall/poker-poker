import Player from './Player';
export default class Dealer {
  public static dealCards(players: Player[]) {
    players.forEach((player) => {
      player.setHoleCards({
        card1: 'AS',
        card2: 'AD',
      });
    });
  }
}
