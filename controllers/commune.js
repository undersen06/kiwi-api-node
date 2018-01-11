// Load required packages
var Commune = require('../models/commune');



exports.getCommunes = function(req, res) {
  // Use the Beer model to find all beer
  Commune.find({}, function(err, beers) {
    if (err)
      res.send(err);

    res.json(beers);
  });
};

// Create endpoint /api/beers/:beer_id for GET
exports.getCommune = function(req, res) {
  // Use the Beer model to find a specific beer
  Commune.find({ regionId: req.params.region_id }, function(err, beer) {
    if (err)
      res.send(err);

    res.json(beer);
  });
};


exports.createCommune = function(req, res) {
  // Create a new instance of the Beer model
  var commune = new Commune();

  commune.name = req.body.name;
  commune.isActive = req.body.isActive;
  commune.regionId = req.body.regionId;


  // Save the beer and check for errors
  commune.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Commune added', data: commune });
  });
};
//
// // Create endpoint /api/beers/:beer_id for PUT
// exports.putBeer = function(req, res) {
//   // Use the Beer model to find a specific beer
//   Beer.update({ userId: req.user._id, _id: req.params.beer_id }, { quantity: req.body.quantity }, function(err, num, raw) {
//     if (err)
//       res.send(err);
//
//     res.json({ message: num + ' updated' });
//   });
// };
//
// // Create endpoint /api/beers/:beer_id for DELETE
// exports.deleteBeer = function(req, res) {
//   // Use the Beer model to find a specific beer and remove it
//   Beer.remove({ userId: req.user._id, _id: req.params.beer_id }, function(err) {
//     if (err)
//       res.send(err);
//
//     res.json({ message: 'Beer removed from the locker!' });
//   });
// };
