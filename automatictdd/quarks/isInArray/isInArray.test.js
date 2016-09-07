const assert = require('assert');

const list = ['suissa', 'itacir'];
const valueTRUE = 'suissa';
const valueFALSE = 'pitchulo';

assert.equal(true, require('./isInArray')(valueTRUE, list));
assert.equal(false, require('./isInArray')(valueFALSE, list));

console.log(valueTRUE + ' esta na lista?', require('./isInArray')(valueTRUE, list));
console.log(valueFALSE + ' esta na lista?', require('./isInArray')(valueFALSE, list));