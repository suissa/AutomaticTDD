'use strict';

const assert = require('assert');

const valueTRUE = [1, 2];
const valueFALSE = '1';

assert.equal(true, require('./isArray')(valueTRUE));
assert.equal(false, require('./isArray')(valueFALSE));

console.log(valueTRUE + ' é um Array?', require('./isArray')(valueTRUE));
console.log(valueFALSE + ' é um Array?', require('./isArray')(valueFALSE));
