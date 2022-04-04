export enum Suit {
  Spades = 'Spades',
  Clubs = 'Clubs',
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
}

// Can't reverse look up when setting to a string
// Might need to change this to an array or objects as per: https://github.com/GeekLaunch/poker/blob/5ac947443bf94399e950c46f7b6446c016eb55c8/ts/Card.ts
export enum Rank {
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  JACK = 'J',
  QUEEN = 'Q',
  KING = 'K',
  ACE = 'A',
}

export default class Card {
  rank: Rank;
  suit: Suit;
  shortCode: string;

  public constructor(rank: Rank, suit: Suit) {
    this.rank = rank;
    this.suit = suit;

    this.shortCode = `${rank}${suit.charAt(0)}`;
  }

  getSuit() {
    return this.suit.charAt(0);
  }
  getSuitName() {
    return this.suit;
  }

  getRank() {
    return this.rank;
  }

  getShortCode() {
    return this.shortCode;
  }
}
