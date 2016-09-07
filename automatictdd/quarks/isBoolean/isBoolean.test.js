'use strict';

const expect = require('chai').expect;

//const assert = require('assert');

const valueTRUE = [false, true];
const valueFALSE = ['1', undefined, null, 0, new Date()];

const testFalse = (values) => {
  values.forEach((element,index) =>{
    it('Testando: ' + element, () =>{
      expect(require('./isBoolean')(element)).to.equal(false);
    });
  });
};

const testTrue = (values) => {
  values.forEach((element,index) => {
    it('Testando: ' + element, ()=>{
      expect(require('./isBoolean')(element)).to.equal(true);
    });
  });
};

describe('Teste de boolean', ()=>{
  describe('boleanos inválidos: ', () => testFalse(valueFALSE));
  describe('boleanos válidos: ', () => testTrue(valueTRUE));
});

//assert.equal(true, require('./isBoolean')(valueTRUE));
//assert.equal(false, require('./isBoolean')(valueFALSE));

//console.log(valueTRUE + ' é um Boolean?', require('./isBoolean')(valueTRUE));
//console.log(valueFALSE + ' é um Boolean?', require('./isBoolean')(valueFALSE));
