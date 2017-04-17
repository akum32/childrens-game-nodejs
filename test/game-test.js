const Game = require('../lib/game');

describe('game', () => {

  it('eliminates children clockwise after the given number of hops', () => {
    const result = play({noOfChildren: 5, hopCount: 3});
    expect(result.eliminatedSequence).to.eql([3,1,5,2,4]);
  });

  it('identifies the last eliminated child as the winner', () => {
    const result = play({noOfChildren: 5, hopCount: 3});
    expect(result.winner).to.eql(4);
  });
});

function play(settings) {
  return new Game().play(settings);
}
