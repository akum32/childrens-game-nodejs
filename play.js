const parseArgs = require('minimist');
const Game = require('./lib/game');

const settings = parseArgs(process.argv.slice(2));
const result = new Game().play(settings);
console.log('Game finished!', result);