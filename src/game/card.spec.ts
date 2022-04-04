import Card from './Card';
import { Suit, Rank } from './Card';
describe('Card test', () => {
  test('create card', async () => {
    // expect(1 + 1).toEqual(2);

    let card = new Card(Rank.ACE, Suit.Clubs);
    console.log(card);
    console.log(card.getSuitName());
    console.log(card.getShortCode());
  });
});
