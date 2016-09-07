'use strict';

module.exports = (value) => {

	//value = value.replace(/[^\d]+/g,'');
    const isEmpty = require('../isEmpty/isEmpty')(value);
    //VERIFICA SE A STRING ESTÁ EM BRANCO
    if(isEmpty) return false;

    const isString = require('../isString/isString')(value);
    //VEIRIFICA SE NÃO É UMA STRING
    if(!isString) return false;
    //VEIRIFICA SE O VALOR É MENOR QUE 13
    if(value < 13) return false;



    let campos = value.split('');
    let colunas = [];
    const arrayPrimeiroDig = ['5','4','3','2','9','8','7','6','5','4','3','2'];
    const primeiroDig = 2;

    const arraySegundoDig = ['6','5','4','3','2','9','8','7','6','5','4','3','2'];
    const segundoDig = 1;

    /**
        INICIO DA FUNÇAO QUE VAI VERIFICAR O PRIMEIRO E SEGUNDO DIGITO DO 
        CNPJ REALIZANDO ASSIM SUA VALIDAÇÃO
    **/

    const verificaDigito = (campos , colunas , arrayVerificador,numDigito) => {     
        
        for(let i = 0; i < arrayVerificador.length; i++) {
            colunas[i] = campos[i] * arrayVerificador[i];
        }

        let soma = 0;

        colunas.forEach((valor) => {
            soma = valor + soma;
        });

        let resto = soma % 11;
        let digitoVerificador = null;

        if(resto < 2) {
            digitoVerificador = 0;
        } else {
            digitoVerificador = 11 - resto;
        }

        let digito = campos.length - numDigito;

        if(digitoVerificador == campos[digito])
            return true;
        return false;
    }

    let valorPrimeiro = verificaDigito(campos,colunas,arrayPrimeiroDig,primeiroDig);
    let valorSegundo = verificaDigito(campos,colunas,arraySegundoDig,segundoDig);

    if(valorPrimeiro && valorSegundo) 
        return true;
    return false;

}