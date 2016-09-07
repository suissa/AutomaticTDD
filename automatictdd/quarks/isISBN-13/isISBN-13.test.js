'use strict';

const describes = [
	{type: true
		, message:"ISBN válido"
		//, test: test
		, values: [9780306406157, 9788525423498, 9788581303079] 
	}
	, {type: false
		, message:"ISBN inválido"
	//	, test: test
		, values: [1111111111111, 123, 2367463526234, 9780306406156] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.is.js')('isISBN-13', describes);

