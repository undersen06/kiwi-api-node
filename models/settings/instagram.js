var mongoose = require('mongoose');

var instagramSchema   = new mongoose.Schema({
  appId:String,
  token:String
});

module.exports = mongoose.model('InstagramSettings', instagramSchema);
