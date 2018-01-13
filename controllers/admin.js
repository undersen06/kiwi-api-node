var mongoose =  require('mongoose');
var jwt =  require('jsonwebtoken');
var bcrypt =  require('bcrypt');
var Admin =  require('../models/admin');
var mailer = require('./mailer');


// exports.register = function(req,res){
//
//   var admin = new Admin(req.body);
//
//   admin.hash_password = bcrypt.hashSync(req.body.password,10);
//   admin.save(function(err,user){
//     if (err) {
//       return res.status(400).send({
//         message: err
//       });
//     } else {
//       user.hash_password = undefined;
//
//       mailer.sendEmail('tomas.diaz06.p@gmail.com','nuevo admin','se a registrado un nuevo administrador');
//
//       return res.json(user);
//     }
//
//   });
//
// };


exports.register = function(req, res) {
  var admin = new Admin(req.body);
  admin.hash_password = bcrypt.hashSync(req.body.password, 10);
  admin.save(function(err, admin) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      admin.hash_password = undefined;

      mailer.sendEmail('tomas.diaz06.p@gmail.com','nuevo admin','se a registrado un nuevo administrador');

      return res.json(admin);
    }
  });
};

exports.sign_in = function(req,res){
  Admin.findOne({
    email: req.body.email
  }, function(err, admin) {
    if (err) throw err;
    if (!admin) {
      res.status(401).json({ message: 'Authentication failed. Admin not found.' });
    } else if (user) {
      if (!admin.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({token: jwt.sign({ email: admin.email, fullName: admin.fullName, _id: admin._id}, 'RESTFULAPIs')});
      }
    }
  });

};

exports.loginRequired = function(req, res, next) {
  if (req.admin) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};
