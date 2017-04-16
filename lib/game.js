'use strict';

class Game {

  play(settings) {
    const children = this._createChildren(settings);
    const eliminatedSequence = this._eliminateChildrenClockwise(children, settings);
    return {eliminatedSequence};
  }

  _createChildren(settings) {
    const {noOfChildren} = settings;
    return Array.from({length: noOfChildren}, (_, index) => index + 1);
  }

  _eliminateChildrenClockwise(children, settings) {
    const remainingChildren = children.slice();
    const eliminatedChildren = [];
    const {hopCount} = settings
   
    let index = 0;
    while(remainingChildren.length > 0) {
      index = (index + hopCount - 1) % remainingChildren.length;
      eliminatedChildren.push(remainingChildren[index]);
      remainingChildren.splice(index, 1);
    }
     return eliminatedChildren;
  }
}

module.exports = Game;