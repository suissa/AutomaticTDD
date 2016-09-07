'use strict';

const describes = [
  { type: true
  , message: 'to LOWER'
  , values: ['Suissa', 'Itacir']
  , valuesExpected: ['suissa', 'itacir']
  }
, { type: false
  , message: 'não to LOWER'
  , values: ['Suissa', 'Itacir']
  , valuesExpected: ['suissa', 'Itacir']
  }
];
require('./testModuleGenericTESTE')('toLowerCase', describes);