'use strict';


const itQuarkIs = require('./itQuarkIs');

module.exports = (values, valueToTest, testName) => {
  values.forEach((element, index) => {
    itQuarkIs(element, index, valueToTest, testName)
  });
};