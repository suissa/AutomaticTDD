'use strict';

const expect = require('chai').expect;

module.exports =  {
  test: (testName, values, valueToTest, describes) => {

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
  }
};

