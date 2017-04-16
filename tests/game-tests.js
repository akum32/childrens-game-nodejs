const test = require('tape');
const Game = require('../lib/game');

test('eliminates children clockwise after the given number of hops', (assert) => {
  const noOfChildren = 5;
  const hopCount = 3;
  const result = new Game().play({noOfChildren, hopCount});
  assert.deepEqual(result.eliminatedSequence, [3,1,5,2,4]);
  assert.end();
});
