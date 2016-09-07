'use strict';

const expect = require('chai').expect;

const test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(valueToTest);
    });
  });
};
const describes = [
  { type: true
  , message: 'é String'
  , test: test
  , values: ['Suissa', '1', '', ' ']
  }
, 
  { type: false
  , message: 'não é String'
  , test: test
  , values: [null, undefined, 1, true, {}, ()=>{}]
  }
]

describe('isString', () => {
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