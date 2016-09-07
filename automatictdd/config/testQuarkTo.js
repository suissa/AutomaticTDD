'use strict';


const itQuarkTo = require('./itQuarkTo');

module.exports = (values, valueToTest, testName, describes) => {
  let valuesExpectedIndex = 0;
  if(!valueToTest) valuesExpectedIndex = 1;
  let valueConverted = 0;
  values.forEach((element, index) => {
    valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
    itQuarkTo(element, index, valueToTest, valueConverted, valuesExpectedIndex, testName, describes)
  });
};