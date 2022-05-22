import { Card, Suit } from './Card';
describe('Shortcode for card', () => {
  test('it should return a shortcode for the Ace of Spades', async () => {
    const card = new Card(1, Suit.Spades);

    expect(card.getShortCode()).toEqual('AS');
  });

  test('it should return a shortcode for the 10 of Clubs', async () => {
    const card = new Card(10, Suit.Clubs);

    expect(card.getShortCode()).toEqual('10C');
  });
});
