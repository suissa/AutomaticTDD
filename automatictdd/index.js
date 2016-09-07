'use strict';

const describes = [
  { type: true
  , message: 'é String'
  , values: ['Suissa', '1', '', ' ']
  }
, 
  { type: false
  , message: 'não é String'
  , values: [null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./testModule')('isString', describes);