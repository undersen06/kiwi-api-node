// Load required packages
var Facebook = require('../models/settings/facebook');
var Instagram = require('../models/settings/instagram');
var Onesignal = require('../models/settings/onesignal');
var Twitter = require('../models/settings/twitter');

var Settings = require('../models/settings.');


exports.updateOneSignal = function(req, res) {

  Onesignal.update({_id: req.params.onesignalId }, {
    appId: req.body.appId ,
    token: req.body.token,
    created_at:Date.now(),
    updated_by:req.body.adminId
  }, function(err, num, raw) {
    if (err)
    res.send(err);

    res.json({ message: 'OneSignal Settings updated',onesignal:{
      appId: req.body.appId ,
      token: req.body.token,
    }});
  });
}


exports.createOneSignal = function(req, res) {

  var oneSignal =  new Onesignal();

  oneSignal.appId = req.body.appId ,
  oneSignal.token = req.body.token,
  oneSignal.created_at = Date.now(),
  oneSignal.updated_by = req.body.adminId

  oneSignal.save(function(err){
    if (err)
    res.send(err);
    res.json({ message: 'OneSignal Created updated',onesignal:{
      appId: req.body.appId ,
      token: req.body.token,
    }});
  })
}


exports.getOneSignal = function(req, res) {
  Onesignal.find({}, function(err, tips) {
    res.json(tips);
  });
}

exports.enableSettings =  function(req,res){
  Settings.update({_id: req.params.id },{shouldShow:true},function(err, num, raw){
    if (err)
      res.send(err);

    res.json({message:'item enabled'})
  })
}

exports.disableSettings =  function(req,res){
  Settings.update({_id: req.params.id },{shouldShow:false},function(err, num, raw){
    if (err)
      res.send(err);

    res.json({message:'item disabled'})
  })
}




//
// exports.createTip = function(req, res) {
//   var tip = new Tips();
//
//   tip.title = req.body.title;
//   tip.body = req.body.body;
//   tip.isActive = req.body.isActive;
//
//
//   tip.save(function(err) {
//     if (err)
//     res.send(err);
//
//     res.json({ message: 'Tips added', data: tip });
//   });
// };
//
//
// exports.updateFacebook = function(req, res) {
//   Facebook.update({_id: req.params.facebookId }, { isActive: true , updated_at: Date.now}, function(err, num, raw) {
//     if (err)
//     res.send(err);
//
//     res.json({ message: req.params.tip_id + ' enabled' });
//   });
// }
//
//
// exports.updateInstagram = function(req, res) {
//   Instagram.update({_id: req.params.instagramId }, { isActive: true , updated_at: Date.now}, function(err, num, raw) {
//     if (err)
//     res.send(err);
//
//     res.json({ message: req.params.tip_id + ' enabled' });
//   });
// }
//
// exports.updateTwitter = function(req, res) {
//   Twitter.update({_id: req.params.twitterId }, { isActive: true , updated_at: Date.now}, function(err, num, raw) {
//     if (err)
//     res.send(err);
//
//     res.json({ message: req.params.tip_id + ' enabled' });
//   });
// }
