'use strict';

const expect = require('chai').expect;

const valueFalse = ['','121@221.c','Letras',2009];
const valueTrue = ['contato@bol.com.br','teste@gmail.com'];

const testeFalse = (values) => {
	values.forEach((element,index) => {
		it('testando: '+element,() => {
			expect(require('./isEmail')(element)).to.equal(false);
		});
	});
}

const testeTrue = (values) => {
	values.forEach((element,index) => {
		it('testando: '+element,() => {
			expect(require('./isEmail')(element)).to.equal(true);
		});
	});
}

describe('testando validação dos emails:' , () => {
	describe('teste False',() => testeFalse(valueFalse));
	describe('teste True',() => testeTrue(valueTrue));
});