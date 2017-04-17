const test = require('tape');
const ClockwiseEliminator = require('../lib/clockwise-eliminator');

test('eliminates items when hop count less than number of items', assert => {
  const result = clockwiseEliminate([1,2,3], {hopCount: 2});
  assert.deepEqual(result, [2,1,3]);
  assert.end();
});

test('eliminates items when hop count equal to number of items', assert => {
  const result = clockwiseEliminate([1,2,3], {hopCount: 3});
  assert.deepEqual(result, [3,1,2]);
  assert.end();
});

test('eliminates items when hop count greater than number of items', assert => {
  const result = clockwiseEliminate([1,2,3], {hopCount: 4});
  assert.deepEqual(result, [1,3,2]);
  assert.end();
});

test('eliminates items when hop count is 1', assert => {
  const result = clockwiseEliminate([1,2,3], {hopCount: 1});
  assert.deepEqual(result, [1,2,3]);
  assert.end();
});

test('eliminates nothing if no items given', assert => {
  const result = clockwiseEliminate([], {hopCount: 1});
  assert.deepEqual(result, []);
  assert.end();
});

function clockwiseEliminate(items, settings) {
  return new ClockwiseEliminator().eliminateAll(items, settings);
}
