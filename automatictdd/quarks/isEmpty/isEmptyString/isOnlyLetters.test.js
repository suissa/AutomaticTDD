'use strict';

const assert = require('assert');

const valueFALSE = 12;
const valueTRUE = 'suissa';

assert.equal(true, require('./isOnlyLetters')(valueTRUE));
assert.equal(false, require('./isOnlyLetters')(valueFALSE));

console.log(valueTRUE + ' é apenas letras?', require('./isOnlyLetters')(valueTRUE));
console.log(valueFALSE + ' é apenas letras?', require('./isOnlyLetters')(valueFALSE));