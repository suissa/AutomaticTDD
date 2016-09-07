'use strict';

const expect = require('chai').expect;

module.exports = (element, index, valueToTest, valueConverted, valuesExpectedIndex, testName, describes) => {
  it('testando: '+element+' com '+valueConverted,  () => {
    let validated = require('./../../'+testName+'/'+testName)(element);
    if(valueToTest) expect(validated).to.deep.equal(describes[valuesExpectedIndex].valuesExpected[index]);
    else expect(validated).to.deep.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);
  });
}