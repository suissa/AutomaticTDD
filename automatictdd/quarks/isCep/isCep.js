'use strict';

const regex = /^[0-9]{8}$/;

module.exports = (value) => {
  const isEmpty = require('../isEmpty/isEmptyString/isEmptyString')(value);  
  const isString = require('../isString/isString')(value);  
  console.log('isEmpty', isEmpty);
  if(!isEmpty) {
    console.log(value);
    value = value.replace(/\.|\-/g, '');     
    const isCep = regex.test(value);
    if(isCep) return true;  
  }
      
  return false;         
}