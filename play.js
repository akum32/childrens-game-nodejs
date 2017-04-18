const parseArgs = require('minimist');
const Game = require('./lib/game');

const settings = parseArgs(process.argv.slice(2));
const result = new Game().play(settings);

console.log('Game finished!');
console.log(`Winner: ${result.winner}`);
console.log(`Eliminated sequence: ${result.eliminatedSequence}`);
