'use strict';

const ClockwiseEliminator = require('./clockwise-eliminator');

class Game {

  play(settings) {
    const children = this._createChildren(settings);
    const eliminatedSequence = this._eliminateChildren(children, settings);
    const winner = this._getLastItem(eliminatedSequence);
    return {eliminatedSequence, winner};
  }

  _createChildren(settings) {
    const {noOfChildren} = settings;
    return Array.from({length: noOfChildren}, (_, index) => index + 1);
  }

  _eliminateChildren(children, settings) {
    const eliminator = new ClockwiseEliminator();
    const {hopCount} = settings;
    return eliminator.eliminateAll(children, {hopCount});
  }

  _getLastItem(items) {
    return items.slice(-1).pop();
  }
}

module.exports = Game;
