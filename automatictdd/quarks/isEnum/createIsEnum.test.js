'use strict';

const assert = require('assert');

const list = ['suissa', 'itacir'];
const valueTRUE = 'suissa';
const valueFALSE = 'pitchulo';

const isEnum = require('./createIsEnum')(list);

assert.equal(true, isEnum(valueTRUE));
assert.equal(false, isEnum(valueFALSE));

console.log(valueTRUE + ' esta na lista?', isEnum(valueTRUE));
console.log(valueFALSE + ' esta na lista?', isEnum(valueFALSE));
