'use strict';

const expect = require('chai').expect;

const valueTrue = ['05068287512','92317530536','80713524383','41157282644'];
const valueFalse = ['@31231ws','',0,123456789,'00000000000'];

const testeTrue = (values) => {
	values.forEach((element,index) => {
		it('testando: '+element,() => {
			expect(require('./isCpf')(element)).to.equal(true);
		});
	});
}

const testeFalse = (values) => {
	values.forEach((element,index) => {
		it('testando: '+element,() => {
			expect(require('./isCpf')(element)).to.equal(false);
		});
	});
}

describe('testando cpf :', () => {
	describe('teste true: ',() => testeTrue(valueTrue));
	describe('teste false: ',() => testeFalse(valueFalse));
});
