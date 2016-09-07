'use strict';

module.exports = (value, list) => {

  const isEnum = require('./createIsEnum')(list)

  const validated = isEnum(value);
  if (validated) return true;

  return false;
};
