'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  let test = (values, valueToTest) => {

    let valuesExpectedIndex = 0;
    if(!valueToTest) valuesExpectedIndex = 1;

    let valueToTransform = 0;
    values.forEach( (element, index) => {
      valueToTransform = describes[valuesExpectedIndex].valuesExpected[index];
      it('testando: '+element+' com '+valueToTransform,  () => {
        let validated = require('./../'+testName+'/'+testName)(element);
        if(valueToTest) expect(validated).to.equal(describes[valuesExpectedIndex].valuesExpected[index]);
        else expect(validated).to.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);
      });
    });
  };
  if(describes[0].list) {
    const list = describes.splice(0,1)[0].list;
    test = (values, valueToTest) => {
      values.forEach( (element) => {
        it('testando: '+element,  () => {
          let validated = require('./../'+testName+'/'+testName)(element, list);
          expect(validated).to.equal(valueToTest);
        });
      });
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
