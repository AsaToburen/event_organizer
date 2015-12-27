'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Events', {
    name : {type : String, default: ''}
});