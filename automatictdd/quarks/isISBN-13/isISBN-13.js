'use strict';


module.exports = (value) => {

	const arrayValues = value.toString().split("").map(Number);
	//console.log(arrayValues);
	let digCalculado = 0;
	//Se isbn nao tiver 13 posiçoes já pode ser considerado inválido
	if (arrayValues.length != 13 ) return false;

	/*
		1 passo:
		da posicao 1 a 12 do array deve-se multiplicar da seguinte forma:
		indice impar multiplica-se por 1
		indice par multiplica-se por 3
	 */	
	arrayValues.forEach(function (element,index){
    if (index != arrayValues.length -1) {
        //console.log("index: " + index + " element: " + element);
        if(index % 2 === 0){
            digCalculado = digCalculado + element;
        }else {
            digCalculado = digCalculado + (element * 3);
        }
    }
	});

	/* passo2:
	- e feito o mod 10 sobre a soma calculada e este valor subtraido de 10.
	- feito isso o resultado mod 10 deve ser igual ao elemento verificador a ultima posiçao do array
	*/
	digCalculado = (10 - (digCalculado % 10)) % 10;
	//console.log(digCalculado);

	/* passo3:
		comparacao se o digito calculado é igual ao passado no array
	*/
	if (digCalculado === arrayValues[arrayValues.length -1]) return true;

	return false;
}