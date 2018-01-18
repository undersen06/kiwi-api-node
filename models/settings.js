var mongoose = require('mongoose');

var Settings = require('./commune');

// Define our beer schema
var settingsSchema   = new mongoose.Schema({

    {
      name : String,
      shouldShow:Boolean
    }


});

// Export the Mongoose model
module.exports = mongoose.model('settingsSchema', settingsSchema);
