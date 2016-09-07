'use strict';

const describes = [
  { list: ['suissa', 'itacir'] }
, { type: true
  , message: 'está array'
  , values: ['suissa', 'itacir']
  }
, { type: false
  , message: 'não está array'
  , values: ['suissooa', null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./testModuleGenericTESTE')('isInArray', describes);