enum Suits {
  SPADES,
  HEARTS,
  DIAMONDS,
  CLUBS,
}

enum Rank {
  TWO = 2,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE,
}

export default class Card {
  suit: Suits;
  rank: Rank;
  public constructor() {
    this.suit = Suits.CLUBS;
    this.rank = Rank['ACE'];
  }

  getSuit() {
    return Suits[0];
  }
  getSuitName() {
    return this.suit;
  }

  getRank() {
    return this.rank;
  }
}
