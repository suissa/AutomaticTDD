'use strict';
// Criado por @gkal19
var assert = require('assert');
var leapYear = require('./');

it('Vamos verificar se o ano é um ano bissexto', function () {
	assert(!leapYear(2014));
	assert(leapYear(2016));
	assert(leapYear(new Date(2016, 0)));
	assert(typeof leapYear() === 'boolean');
});