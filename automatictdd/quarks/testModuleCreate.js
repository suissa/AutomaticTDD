'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const list = describes.splice(0,1)[0].list;
  const test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element, list);
        expect(validated).to.equal(valueToTest);
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
      if(element.list) return true;
    });
  });
};
