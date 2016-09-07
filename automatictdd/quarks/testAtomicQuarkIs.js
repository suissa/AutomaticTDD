'use strict';

const expect = require('chai').expect;

module.exports = {
  test: (testName, values, valueToTest, describes) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element);
        // console.log('validated', validated)
        expect(validated).to.equal(valueToTest);
      });
    });
  }
};

