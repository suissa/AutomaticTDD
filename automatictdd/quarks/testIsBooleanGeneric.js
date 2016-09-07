'use strict';

const describes = [
, { type: true
  , message: 'é Boolean'
  , values: [true, false]
  }
, { type: false
  , message: 'não é Boolean'
  , values: [null, undefined, 1, "a", {}, ()=>{}]
  }
];
require('./testModuleGeneric')('isBoolean', describes);