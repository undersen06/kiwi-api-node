var mongoose = require('mongoose');

var Tips = require('./tips');

// Define our beer schema
var TipsSchema   = new mongoose.Schema({
  title : String,
  body : String,
  isActive : Boolean,
  created_at : { type: Date, default: Date.now },
  updated_at : { type: Date, default: Date.now }

});

// Export the Mongoose model
module.exports = mongoose.model('Tips', TipsSchema);
