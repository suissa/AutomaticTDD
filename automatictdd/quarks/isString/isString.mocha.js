'use strict';

const expect = require('chai').expect;
const valueTRUE = 'Suissa';
const valueFALSE = 1;

describe('isString', function() {
  describe('é String',  () => {
    it('testando: '+valueTRUE, () => {
      expect(require('./isString')(valueTRUE)).to.equal(true);
    });
  });
  describe('não é String',  () => {
    it('testando: '+valueFALSE, () => {
      expect(require('./isString')(valueFALSE)).to.equal(false);
    });
  });
});