'use strict';

const expect = require('chai').expect;

const testQuarkTo = require('./testAtomicQuarkTo');
const testQuarkIs = require('./testAtomicQuarkIs');



const testQuarkIsIn = (testName, element, list, valueToTest) => {
  it('testando: '+element,  () => {
    let validated = require('./../'+testName+'/'+testName)(element, list);
    expect(validated).to.equal(valueToTest);
  });
};

// Definimos os tipos de testes
const typesTest = require('./config/testTypes');


module.exports = (testName, describes) => {

  const defineType = (element) => {
    return (testName.indexOf(element) > -1)
  }
  const defineTypeTest = (testName, types) => {
    return types.filter(defineType);
  };

  // Pego apenas o primeiro pois ele eh mais específico
  // Ja que com isIN ele acha tanto isIn como is
  // Sendo esse o retorno [ 'isIn', 'is' ]
  const typesTest = require('./config/testTypes');

  let typeToTest = defineTypeTest(testName, typesTest)[0];

  const isTestTo = require('./config/isTest')(typeToTest, 'to');
  const isTestIs = require('./config/isTest')(typeToTest, 'is');
  const isTestIsIn = require('./config/isTest')(typeToTest, 'isIn');

  let test = (values, valueToTest) => {
    if(isTestTo) testQuarkTo.test(testName, values, valueToTest, describes);
    else testQuarkIs.test(testName, values, valueToTest, describes);
  };

  if(isTestIsIn) {
    if(describes[0].list) {
      const list = describes.splice(0,1)[0].list;
      test = (values, valueToTest) => {
        values.forEach( (element) => {
          testQuarkIsIn(testName, element, list, valueToTest);
        });
      };
    }
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
