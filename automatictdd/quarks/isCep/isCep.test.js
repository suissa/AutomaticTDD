'use strict';

const assert = require('assert');

//CEP Inválidos
const valorMenorQueOito = '10000';
const valorMaiorQueOito = '100000000';
const valorComAlfaNumerico = '1000000A';
const valorComCaracteresEspeciais = '1000000,'
const valorNumerico = 29101950;

//CEP Válidos
const cepValidoComMascara = '29.101-950';
const cepValidoSemMascara = '29101950';

assert.equal(true, require('./isCep')(cepValidoComMascara));
assert.equal(true, require('./isCep')(cepValidoSemMascara));

assert.equal(false, require('./isCep')(valorMenorQueOito));
assert.equal(false, require('./isCep')(valorMaiorQueOito));
assert.equal(false, require('./isCep')(valorComAlfaNumerico));
assert.equal(false, require('./isCep')(valorComCaracteresEspeciais));
assert.equal(false, require('./isCep')(valorNumerico));

console.log(valorMenorQueOito + ' é um cep?', require('./isCep')(valorMenorQueOito));
console.log(valorMaiorQueOito + ' é um cep?', require('./isCep')(valorMaiorQueOito));
console.log(valorComAlfaNumerico + ' é um cep?', require('./isCep')(valorComAlfaNumerico));
console.log(valorComCaracteresEspeciais + ' é um cep?', require('./isCep')(valorComCaracteresEspeciais));
console.log(valorNumerico + ' é um cep?', require('./isCep')(valorNumerico));

console.log(cepValidoComMascara + ' é um cep?', require('./isCep')(cepValidoComMascara));
console.log(cepValidoSemMascara + ' é um cep?', require('./isCep')(cepValidoSemMascara));