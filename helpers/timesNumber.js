const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, list = false, till = 10) => {

  try {
    let output = '';

    for (let i = 1; i <= till; i++) {
      output += `${i} x ${base} = ${i * base}\n`;
    }
    if (list) {
      console.log('=================='.yellow);
      console.log((`Tabla del ${base}`).green);
      console.log('=================='.yellow);
      console.log(output.cyan);
    }
    fs.writeFileSync(`./assets/tabla-${base}.txt`, output);
    return (`Tabla-${base}.txt`).magenta;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  createFile
}