'use strict';

module.exports = {
  validator: (value) => {
    return require('./isNotEmptyMoney')(value);
  }
, message: 'O valor {VALUE} não pode ser vazio e precisa ser maior que 0!'
};