'use strict';

const expect = require('chai').expect;

module.exports =  {
  test: (testName, values, valueToTest, describes) => {
    const list = describes.splice(0,1)[0].list;
    console.log('values', values);
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element, list);
        expect(validated).to.equal(valueToTest);
      });
    });
  }

};

