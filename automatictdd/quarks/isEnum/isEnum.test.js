'use strict';

const assert = require('assert');

const list = ['suissa', 'itacir'];
const valueTRUE = 'suissa';
const valueFALSE = 'pitchulo';

assert.equal(true, require('./isEnum')(valueTRUE, list));
assert.equal(false, require('./isEnum')(valueFALSE, list));

console.log(valueTRUE + ' esta na lista?', require('./isEnum')(valueTRUE, list));
console.log(valueFALSE + ' esta na lista?', require('./isEnum')(valueFALSE, list));
