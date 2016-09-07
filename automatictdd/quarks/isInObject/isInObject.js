'use strict';

module.exports = (value, object) => {
  
  const isObject = require('./../isObject/isObject')(object);  
  if(!isObject) return false;
  
  if(object.hasOwnProperty(value)) return true;
  
  return false;
};
