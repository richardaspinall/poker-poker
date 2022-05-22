export enum Suit {
  Spades,
  Clubs,
  Hearts,
  Diamonds,
}

export class Card {
  public readonly rank: number;
  public readonly suit: number;

  public constructor(rank: number, suit: Suit) {
    this.rank = rank;
    this.suit = suit;
  }

  private static rankNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  private getRankName(): string {
    return Card.rankNames[this.rank - 1];
  }

  private getSuitName(): string {
    return Suit[this.suit].charAt(0);
  }

  public getShortCode(): string {
    return this.getRankName() + this.getSuitName();
  }
}
