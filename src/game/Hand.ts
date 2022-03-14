export default class Hand {
  deck: string[];

  constructor(deck: string[]) {
    this.deck = deck;
  }

  drawCard() {
    return this.deck.pop;
  }
}
