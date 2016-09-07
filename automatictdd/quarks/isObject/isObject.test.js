'use strict';

const expect = require('chai').expect;

const valueTRUE = [new Object(), [], {name: 'Carlos'}];
const valueFALSE = ['1', undefined, null, 0];

const testFalse = (values) =>{
  values.forEach((element, index) =>{
    it('Testando: ' + element, ()=>{
      expect(require('./isObject')(element)).to.equal(false);      
    });
  });
};

const testTrue = (values) => {
  values.forEach((element, index)=>{
    it('Testando: ' + element, () =>{
      expect(require('./isObject')(element)).to.equal(true);  
    });
  });
};

describe('Teste de objetos', ()=>{
  describe('objetos inválidos: ', () => testFalse(valueFALSE));
  describe('objetos válidos: ', () => testTrue(valueTRUE));
});
