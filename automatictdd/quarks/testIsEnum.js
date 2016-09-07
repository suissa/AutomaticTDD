'use strict';

const describes = [
  { list: ['suissa', 'itacir'] }
, { type: true
  , message: 'é ENUM'
  , values: ['suissa', 'itacir']
  }
, { type: false
  , message: 'não é ENUM'
  , values: [null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./testModuleCreate')('isEnum', describes);