'use strict';

const expect = require('chai').expect;

const VALIDATORS_PATH = './quarks/'

module.exports = (testName, describes) => {

  const test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        expect(require(VALIDATORS_PATH+'/'+testName+'/'+testName)(element)).to.equal(valueToTest);
      });
    });
  };

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
    });
  });
};
