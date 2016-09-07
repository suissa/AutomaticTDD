'use strict';

module.exports = (value, list) => {
  const isEmptyValue = require('./../isEmpty/isEmpty')(value);
  const isEmptyArray = require('./../isEmpty/isEmpty')(list);
  const isArray = require('./../isArray/isArray')(list);

  if(!isEmptyValue && !isEmptyArray && isArray)
    return require('./createIsIn')(list)(value);
  return false;
};
