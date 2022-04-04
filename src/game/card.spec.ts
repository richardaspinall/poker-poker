import Card from './Card';
import { Suit, Rank } from './Card';
describe('Card test', () => {
  test('create card', async () => {
    // expect(1 + 1).toEqual(2);

    let card = new Card(Rank.Four, Suit.Clubs);
    // console.log(card);
    // console.log('Rank: ' + card.getRank());
    // console.log('Suit: ' + card.getSuitName());
    // console.log('Full name ' + card.getFullName());
    console.log('Shortcode ' + card.getShortCode());
  });
});
