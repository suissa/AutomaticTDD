'use strict';

module.exports = (testName) => {
  let test = null;
  let findTest = (element) => {
    let regex = new RegExp('^'+element, 'i');
    console.log('teste regex:', testName.match(regex))
    if(!!testName.match(regex)){
      test = require('./testQuark'+element);
    }
  };

  require('./testTypesFactory').forEach(findTest);
  return test;
}