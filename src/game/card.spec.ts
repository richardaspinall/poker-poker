import Card from './Card';
describe('Card test', () => {
  test('create card', async () => {
    // expect(1 + 1).toEqual(2);

    let card = new Card(3, 3);
    // console.log(card);
    // console.log('Rank: ' + card.getRank());
    console.log('Suit: ' + card.getSuitName());
    // console.log('Full name ' + card.getFullName());
    console.log('Shortcode ' + card.getShortCode());
  });
});
