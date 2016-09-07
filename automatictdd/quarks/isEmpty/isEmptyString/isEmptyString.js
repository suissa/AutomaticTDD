'use strict';

module.exports = (value) => {
  const isEmpty = require('../isEmpty')(value)
  const isString = require('../../isString/isString')(value)

  if (isEmpty && isString) return true;
  
  return false;
};
