'use strict';


const itQuarkIsIn = require('./itQuarkIsIn');

module.exports = (values, valueToTest, list, testName) => {
  values.forEach( (element, index) => {
    itQuarkIsIn(element, index, list, valueToTest, testName);
  });
};