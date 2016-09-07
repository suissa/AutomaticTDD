'use strict';

module.exports = (value) => {
    const profileFields = ['id', 'username', 'displayName', 'name', 'gender', 'profileUrl', 'emails', 'photos'];
    const isInArray = require('../isInArray/isInArray')(value, profileFields);
    
    if(isInArray) return true;
    
    return false;
}