var mongoose = require('mongoose');

var oneSignalSchema   = new mongoose.Schema({
  appId:String,
  token:String,
  created_at : { type: Date, default: Date.now },
  updated_by:String
});

module.exports = mongoose.model('oneSignalSettings', oneSignalSchema);
