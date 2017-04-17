const ClockwiseEliminator = require('../lib/clockwise-eliminator');

describe('clockwise eliminator', () => {

  it('eliminates items when hop count less than number of items', () => {
    const result = clockwiseEliminate([1,2,3], {hopCount: 2});
    expect(result).to.eql([2,1,3]);
  });

  it('eliminates items when hop count equal to number of items', () => {
    const result = clockwiseEliminate([1,2,3], {hopCount: 3});
    expect(result).to.eql([3,1,2]);
  });

  it('eliminates items when hop count greater than number of items', () => {
    const result = clockwiseEliminate([1,2,3], {hopCount: 4});
    expect(result).to.eql([1,3,2]);
  });

  it('eliminates items when hop count is 1', () => {
    const result = clockwiseEliminate([1,2,3], {hopCount: 1});
    expect(result).to.eql([1,2,3]);
  });

  it('eliminates nothing if no items given', () => {
    const result = clockwiseEliminate([], {hopCount: 1});
    expect(result).to.eql([]);
  }); 
});

function clockwiseEliminate(items, settings) {
  return new ClockwiseEliminator().eliminateAll(items, settings);
}
