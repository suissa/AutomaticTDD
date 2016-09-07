'use strict';

module.exports = {
  validator: (value) => {
    return require('./isEmptyString')(value);
  }
, message: 'O valor {VALUE} para o campo nome não pode ser vazio!'
};