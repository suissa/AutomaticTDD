'use strict';

// const assert = require('assert');
const notEmpty = require('./isEmptyStringValidate');
// console.log('quarks antes', notEmpty.quarks.length);

// notEmpty.quarks.forEach( function(element, index) {
//   console.log('quarks', element);
// });

const valueTRUE = 'suissa';
const valueFALSE = null;
const valueFALSE2 = ' ';


console.log(valueTRUE + ' é vazio?', notEmpty.validator(valueTRUE));
console.log(valueFALSE + ' é vazio?', notEmpty.validator(valueFALSE));
console.log(valueFALSE2 + ' é vazio?', notEmpty.validator(valueFALSE2));

// assert.ok(value, message)