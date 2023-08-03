const argv = require('yargs').option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Number to multiply'
})
.check((argv, options) => {
  if (isNaN(argv.b)) {
    throw 'Base has to be a number';
  }
  return true;
}).option('l', {
  alias: 'list',
  type: 'boolean',
  default: false,
  demandOption: false,
  describe: 'Shows the multiply table'
}).option('t', {
  alias: 'till',
  type: 'number',
  demandOption: false,
  default: 10,
  describe: 'Number till you want to multiply'
}).check((argv, options) => {
  if (isNaN(argv.t)) {
    throw 'Till has to be a number';
  }
  return true;
})
.argv;

module.exports = argv;