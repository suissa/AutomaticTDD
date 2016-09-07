'use strict';

const expect = require('chai').expect;

const valueFALSE = [false, '', 'teste', null, undefined, ()=>{}];
const valueTRUE = ['id', 'username', 'displayName', 'name', 'gender', 'profileUrl', 'emails', 'photos'];

const testFALSE = (values) => {
  values.forEach((element, index)=>{
    it('Testando: ' + element, () =>{
      expect(require('./isInProfileFields')(element)).to.equals(false);
    });  
  });
};

const testTRUE = (values) =>{
  values.forEach((element, index) => {
    it('Testando: ' + element, ()=>{
      expect(require('./isInProfileFields')(element)).to.equal(true);
    });
  });
};

describe('Teste valor permitido para profileFields', () =>{
  describe('valores invalidos: ', () => testFALSE(valueFALSE));
  describe('valores válidos: ', () => testTRUE(valueTRUE));
});
