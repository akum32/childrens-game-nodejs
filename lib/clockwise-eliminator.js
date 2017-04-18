'use strict';

class ClockwiseEliminator {

  constructor(settings) {
    this._settings = settings;
  }

  eliminateAll(items) {
    const {hopCount} = this._settings;
    const remaining = items.slice();
    const eliminated = [];
   
    let index = 0;
    while(remaining.length > 0) {
      index = (index + hopCount - 1) % remaining.length;
      eliminated.push(remaining[index]);
      remaining.splice(index, 1);
    }
     return eliminated;
  } 
}

module.exports = ClockwiseEliminator;
