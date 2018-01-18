var mongoose = require('mongoose');

var twitterSchema   = new mongoose.Schema({
  appId:String,
  token:String,
  created_at:Date,
  updated_by:String
});

module.exports = mongoose.model('twitterSettings', twitterSchema);
