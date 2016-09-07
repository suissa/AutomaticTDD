'use strict';

const expect = require('chai').expect;

module.exports = (element, index, list, valueToTest, testName) => {
  it('testando: '+element,  () => {
    let validated = require('./../../'+testName+'/'+testName)(element, list);
    expect(validated).to.equal(valueToTest);
  });
};