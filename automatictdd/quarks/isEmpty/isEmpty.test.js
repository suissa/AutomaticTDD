'use strict';

const assert = require('assert');

const valueTRUE = null;
const valueFALSE = 'suissa';

assert.equal(true, require('./isEmpty')(valueTRUE));
assert.equal(false, require('./isEmpty')(valueFALSE));

console.log(valueTRUE + ' é vazio?', require('./isEmpty')(valueTRUE));
console.log(valueFALSE + ' é vazio?', require('./isEmpty')(valueFALSE));