'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const testQuarkIs = require('./config/testQuarkIs');
  const testQuarkTo = require('./config/testQuarkTo');
  const testQuarkIsIn = require('./config/testQuarkIsIn');

  let test = (values, valueToTest) => {
    let isQuarkTo = (testName.indexOf('to') > -1);

    if(isQuarkTo) testQuarkTo(values, valueToTest, testName, describes);
    else testQuarkIs(values, valueToTest, testName);
  };

  if(describes[0].list) {
    const list = describes.splice(0,1)[0].list;
    test = (values, valueToTest) => {
      testQuarkIsIn(values, valueToTest, list, testName);
    };
  }

  describe(testName, () => {
    describes.forEach( (element, index) => {
      if(element.type) {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      else {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      if(element.list) return true;
    });
  });
};