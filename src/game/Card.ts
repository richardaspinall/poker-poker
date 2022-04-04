enum Suit {
  Spades,
  Clubs,
  Hearts,
  Diamonds,
}

// Can't reverse look up when setting to a string
// Might need to change this to an array or objects as per: https://github.com/GeekLaunch/poker/blob/5ac947443bf94399e950c46f7b6446c016eb55c8/ts/Card.ts
// AND keep an enum for the rank
// OR a map?
enum Rank {
  Deuce,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
  Ace,
}

// Index signatures https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
type RankMap = {
  readonly [name: string]: string;
};
const rankShortCodes: RankMap = {
  Deuce: '2',
  Three: '3',
  Four: '4',
  Five: '5',
  Six: '6',
  Seven: '7',
  Eight: '8',
  Nine: '9',
  Ten: '10',
  Jack: 'J',
  Queen: 'Q',
  King: 'K',
  Ace: 'A',
};

export default class Card {
  rank: number;
  suit: number;
  // shortCode: string;

  public constructor(rank: number, suit: number) {
    this.rank = rank;
    this.suit = suit;

    // this.shortCode = `${rank}${suit.charAt(0)}`;
  }

  getRank() {
    return this.rank;
  }

  getSuit(): string {
    return Suit[this.suit].charAt(0);
  }

  getRankName(): string {
    return Rank[this.rank];
  }

  getSuitName(): string {
    return Suit[this.suit];
  }

  getFullName() {
    return `${Rank[this.rank]} of ${Suit[this.suit]}`;
  }

  getShortCode() {
    return rankShortCodes[Rank[this.rank]];
  }
}
