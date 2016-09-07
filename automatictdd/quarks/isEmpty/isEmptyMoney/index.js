'use strict';

// const assert = require('assert');
const notEmpty = require('./isNotEmptyMoneyValidate');
// console.log('quarks antes', notEmpty.quarks.length);

// notEmpty.quarks.forEach( function(element, index) {
//   console.log('quarks', element);
// });

const valueTRUE = 0.34;
const valueFALSE = -1;

// console.log(valueTRUE + ' é money não vazio?', require('./isNotEmptyMoney')(valueTRUE));
// console.log(valueFALSE + ' é money não vazio?', require('./isNotEmptyMoney')(valueFALSE));

console.log(valueTRUE + ' é money?', notEmpty.validator(valueTRUE));
console.log(valueFALSE + ' é money?', notEmpty.validator(valueFALSE));

// assert.ok(value, message)