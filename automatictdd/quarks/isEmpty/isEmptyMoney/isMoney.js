'use strict';

const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

module.exports = (value) => {
  if(isNumeric(value) && value > 0) return true;
  return false;
};