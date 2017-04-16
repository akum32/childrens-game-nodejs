const test = require('tape');
const Game = require('../lib/game');

test('eliminates children clockwise after the given number of hops', (assert) => {
  const noOfChildren = 5;
  const hopCount = 3;
  const result = play({noOfChildren, hopCount});
  assert.deepEqual(result.eliminatedSequence, [3,1,5,2,4]);
  assert.end();
});

test('identifies the last eliminated child as the winner', (assert) => {
  const noOfChildren = 5;
  const hopCount = 3;
  const result = play({noOfChildren, hopCount});
  assert.deepEqual(result.winner, 4);
  assert.end();
});

function play(settings) {
  return new Game().play(settings);
}
