'use strict';

const expect = require('chai').expect;

const valuesTRUE = ['Suissa', '1', '', ' '];
const valuesFALSE = [null, undefined, 1, true, {}, ()=>{}];

describe('isString', function() {
  describe('é String',  () => {
    valuesTRUE.forEach( function(element, index) {
      it('testando: '+element,  () => {
        expect(require('./isString')(element)).to.equal(true);
      });
    });
  });
  describe('não é String',  () => {
    valuesFALSE.forEach( function(element, index) {
      it('testando: '+element,  () => {
        expect(require('./isString')(element)).to.equal(false);
      });
    });
  });
});