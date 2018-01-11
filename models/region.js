var mongoose = require('mongoose');

var Commune = require('./commune');

// Define our beer schema
var RegionsSchema   = new mongoose.Schema({
  name : String,
  isActive : Boolean,
  communes: [{name:String, isActive:Boolean}]
});

// Export the Mongoose model
module.exports = mongoose.model('Region', RegionsSchema);
