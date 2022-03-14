import Card from './Card';

const card = new Card();

console.log(card);
console.log(card.getSuit());
console.log(card.getRank());
describe('test', () => {
  test('add', async () => {
    expect(1 + 1).toEqual(2);
  });
});
