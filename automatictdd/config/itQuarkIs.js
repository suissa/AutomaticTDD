'use strict';

const expect = require('chai').expect;

module.exports = (element, index, valueToTest, testName) => {
  it('testando: '+element,  () => {
    let validated = require('./../../'+testName+'/'+testName)(element);
    expect(validated).to.deep.equal(valueToTest);
  });
};