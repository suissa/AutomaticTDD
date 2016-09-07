'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const testTypes = ['IsIn', 'Is', 'To'];



  // let isQuarkTo = (/to/i.test(testName));
  // let isQuarkIs = (/is/i.test(testName));
  // let isQuarkIsIn = (/isin/i.test(testName));
  let tests = [];

  testTypes.forEach( (element, index) => {
    // verificação de qual eh o teste
    let regex = new RegExp(element, 'i');

    if(!!testName.match(regex)){

      let testModule = require('./config/testQuark'+element);
      let testFunction = 'Quark'+element;
      let test = {};
      tests[testFunction] = testModule;
    }


  });
  console.log(tests);
  const testQuarkIs = require('./config/testQuarkIs');
  const testQuarkTo = require('./config/testQuarkTo');
  const testQuarkIsIn = require('./config/testQuarkIsIn');

  let test = (values, valueToTest) => {

    if(isQuarkTo) tests['QuarkTo'](values, valueToTest, testName, describes);
    else tests['QuarkIs'](values, valueToTest, testName);
  };

  if(describes[0].list) {
    const list = describes.splice(0,1)[0].list;
    test = (values, valueToTest) => {
      tests['QuarkIsIn'](values, valueToTest, list, testName);
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
