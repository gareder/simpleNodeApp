const { createFile } = require('./helpers/timesNumber');
const argv = require('./config/yargs');

console.clear();

// const base = 2;

createFile(argv.b, argv.l, argv.t).then(msg => console.log(msg, 'creado')).catch(err => console.log(err));