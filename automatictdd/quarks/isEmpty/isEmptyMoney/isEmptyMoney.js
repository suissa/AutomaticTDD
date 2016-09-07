'use strict';

module.exports = (value) => {

  // Ele não pode passar daqui se for null ou undefined
  // se não quebrará a função isOnlyLetters q usa match()
  console.log('VALUE: ', value);
  const validated = require('../isEmpty')(value)
  if (validated) return false;
  console.log('validated: ', validated);

  // Funções is precisam receber o valor diretamente no require
  const isMoney = require('./isMoney')(value);
  if (!isMoney) return true;

  return false;
};
