'use strict';

const assert = require('assert');

const valueTRUE = false;
const valueFALSE = '1';

assert.equal(true, require('./isBoolean')(valueTRUE));
assert.equal(false, require('./isBoolean')(valueFALSE));

console.log(valueTRUE + ' é um Boolean?', require('./isBoolean')(valueTRUE));
console.log(valueFALSE + ' é um Boolean?', require('./isBoolean')(valueFALSE));
