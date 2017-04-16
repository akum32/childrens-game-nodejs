'use strict';

const ClockwiseEliminator = require('./clockwise-eliminator');

class Game {

  play(settings) {
    const children = this._createChildren(settings);
    const eliminatedSequence = this._eliminateChildren(children, settings);
    const winner = eliminatedSequence.slice(-1).pop();
    return {eliminatedSequence, winner};
  }

  _createChildren(settings) {
    const {noOfChildren} = settings;
    return Array.from({length: noOfChildren}, (_, index) => index + 1);
  }

  _eliminateChildren(children, settings) {
    const eliminator = new ClockwiseEliminator(settings);
    return eliminator.eliminateAll(children);
  }
}

module.exports = Game;
