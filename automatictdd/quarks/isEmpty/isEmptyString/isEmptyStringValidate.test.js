'use strict';

const assert = require('assert');
const Quark = require('./isEmptyStringValidate');


const valueTRUE = 'suissa';
const valueFALSE = null;
const valueFALSE2 = ' ';

assert.equal(false, Quark.validator(valueTRUE));
assert.equal(true, Quark.validator(valueFALSE));
assert.equal(true, Quark.validator(valueFALSE2));

console.log(valueTRUE + ' é uma String vazia?', Quark.validator(valueTRUE));
console.log(valueFALSE + ' é uma String vazia?', Quark.validator(valueFALSE));
console.log(valueFALSE2 + ' é uma String vazia?', Quark.validator(valueFALSE2));
