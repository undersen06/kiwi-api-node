// Load required packages
var Tips = require('../models/tips');


exports.getTips = function(req, res) {
  Tips.find({}, function(err, tips) {
    res.json(tips);
  });
}


exports.getTip = function(req, res) {
  Tips.find({id:req.id}, function(err, tips) {
    res.json(tips);
  });
}


exports.createTip = function(req, res) {
  var tip = new Tips();

  tip.title = req.body.title;
  tip.body = req.body.body;
  tip.isActive = req.body.isActive;


  tip.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'Tips added', data: tip });
  });
};


exports.enableTip = function(req, res) {
  Tips.update({_id: req.params.tip_id }, { isActive: true , updated_at: Date.now}, function(err, num, raw) {
    if (err)
    res.send(err);

    res.json({ message: req.params.tip_id + ' enabled' });
  });
};

exports.disableTip = function(req, res) {
  Tips.update({_id: req.params.tip_id }, { isActive: false ,updated_at: Date.now}, function(err, num, raw) {
    if (err)
    res.send(err);

    res.json({ message: req.params.tip_id + ' disabled' });
  });
};
