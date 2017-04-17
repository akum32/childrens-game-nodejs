'use strict';

class ClockwiseEliminator {

  eliminateAll(items, settings) {
    const remaining = items.slice();
    const eliminated = [];
   
    let index = 0;
    while(remaining.length > 0) {
      index = (index + settings.hopCount - 1) % remaining.length;
      eliminated.push(remaining[index]);
      remaining.splice(index, 1);
    }
     return eliminated;
  } 
}

module.exports = ClockwiseEliminator;
