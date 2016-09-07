'use strict';

const assert = require('assert');

const valueTRUE = 1;
const valueFALSE = 'suissa';

assert.equal(true, require('./isNumber')(valueTRUE));
assert.equal(false, require('./isNumber')(valueFALSE));

console.log(valueTRUE + ' é um número?', require('./isNumber')(valueTRUE));
console.log(valueFALSE + ' é um número?', require('./isNumber')(valueFALSE));