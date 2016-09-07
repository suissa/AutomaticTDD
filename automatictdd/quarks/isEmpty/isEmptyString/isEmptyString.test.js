'use strict';

const assert = require('assert');

const valueFALSE = 'Suissera';
const valueFALSE1 = 1;
const valueTRUE = '';

assert.equal(false, require('./isEmptyString')(valueFALSE));
assert.equal(false, require('./isEmptyString')(valueFALSE1));
assert.equal(true, require('./isEmptyString')(valueTRUE));

console.log(valueFALSE + ' é uma String vazia?', require('./isEmptyString')(valueFALSE));
console.log(valueFALSE1+ ' é uma String vazia?', require('./isEmptyString')(valueFALSE1));
console.log(valueTRUE + ' é uma String vazia?', require('./isEmptyString')(valueTRUE));