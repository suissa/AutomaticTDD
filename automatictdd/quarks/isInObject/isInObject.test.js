'use strict';

const expect = require('chai').expect;

const object = {name: 'Carlos', age: 29, heigth: 3.00};

const valueFALSE = ['', undefined, false, true, new Date(), 'altura'];
const valueTRUE = ['name', 'age', 'heigth'];

const testFALSE = (values) => {
  values.forEach((element, index) => {
    it('Testando: ' + element, ()=>{
      expect(require('./isInObject')(element, object)).to.equals(false);
    });
  });
};

const testTRUE = (values) => {
  values.forEach((element, index) => {
    it('Testand: ' + element, ()=> {
      expect(require('./isInObject')(element, object)).to.equals(true);
    });  
  });
};

describe('Teste propriedade no objeto', ()=>{
  describe('valores inválidos: ', ()=> testFALSE(valueFALSE));
  describe('valores válidos: ', () => testTRUE(valueTRUE));
});