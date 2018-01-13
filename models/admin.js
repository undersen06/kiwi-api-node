var mongoose = require('mongoose');
var bcrypt =  require('bcrypt');


// Define our beer schema
var AdminSchema   = new mongoose.Schema({
  fullName:{
    type: String,
    trim: true,
    required: true
  },
  email:{
    type: String,
    unique:true,
    lowercase:true,
    trim:true,
    required:true

  },
  hash_password:{
    type:String,
    required:true
  },
  created_at : { type: Date, default: Date.now },
  updated_at : { type: Date, default: Date.now }

});

AdminSchema.methods.comparePassword =  function(password){
  return bcrypt.compareSync(password,this.hash_password);
}


// Export the Mongoose model
module.exports = mongoose.model('Admin', AdminSchema);
