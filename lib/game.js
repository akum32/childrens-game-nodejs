'use strict';

const ClockwiseEliminator = require('./clockwise-eliminator');

class Game {

  constructor(settings) {
    this._settings = settings;
  }

  play() {
    const children = this._getChildren();
    const eliminatedSequence = this._eliminateChildren(children);
    const winner = this._getLastItem(eliminatedSequence);
    return {eliminatedSequence, winner};
  }

  _getChildren() {
    const {noOfChildren} = this._settings;
    return Array.from({length: noOfChildren}, (_, index) => index + 1);
  }

  _eliminateChildren(children) {
    const {hopCount} = this._settings;
    const eliminator = new ClockwiseEliminator({hopCount});
    return eliminator.eliminateAll(children);
  }

  _getLastItem(items) {
    return items.slice(-1).pop();
  }
}

module.exports = Game;
