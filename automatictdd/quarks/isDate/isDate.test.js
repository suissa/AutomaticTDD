'use strict';

const assert = require('assert');

const valueTRUE = new Date();
const valueFALSE = 'ImNotAnDate';

assert.equal(true, require('./isDate')(valueTRUE));
assert.equal(false, require('./isDate')(valueFALSE));

console.log(valueTRUE + ' é uma data?', require('./isDate')(valueTRUE));
console.log(valueFALSE + ' é uma data?', require('./isDate')(valueFALSE));
