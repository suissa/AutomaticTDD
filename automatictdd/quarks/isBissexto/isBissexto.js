'use strict';
// Criado por @gkal19
module.exports = function(year) {
	year = year || new Date();
	year = year instanceof Date ? year.getFullYear() : year;
	/* Se o ano for divisível por 4 
	   Se o ano for divisível por 400 */
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};