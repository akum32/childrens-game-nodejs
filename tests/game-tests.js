const test = require('tape');
const Game = require('../lib/game');

test('eliminates children clockwise after the given number of hops', (assert) => {
  const result = play({noOfChildren: 5, elimination: {hopCount: 3}});
  assert.deepEqual(result.eliminatedSequence, [3,1,5,2,4]);
  assert.end();
});

test('identifies the last eliminated child as the winner', (assert) => {
  const result = play({noOfChildren: 5, elimination: {hopCount: 3}});
  assert.deepEqual(result.winner, 4);
  assert.end();
});

function play(settings) {
  return new Game().play(settings);
}
