var mongoose = require('mongoose');

// Define our beer schema
var CommuneSchema   = new mongoose.Schema({
  name : String,
  isActive : Boolean
});

// Export the Mongoose model
module.exports = mongoose.model('Commune', CommuneSchema);
