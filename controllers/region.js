// Load required packages
var Region = require('../models/region');
var Commune = require('../models/commune');

exports.getRegions = function(req, res) {
  Region.find({}, function(err, regions) {
    res.json(regions);
  });
}




exports.createRegion = function(req, res) {

  var region = new Region();

  region.name = req.body.name;
  region.isActive = req.body.isActive;
  region.communes = req.body.communes;

  region.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'Region added', data: region });
  });
};


exports.enableRegion = function(req, res) {
  // Use the Beer model to find a specific beer
  Region.update({_id: req.params.region_id }, { isActive: true }, function(err, num, raw) {
    if (err)
    res.send(err);

    res.json({ message: num + ' updated' });
  });
};

exports.disableRegion = function(req, res) {
  // Use the Beer model to find a specific beer
  Region.update({_id: req.params.region_id }, { isActive: false }, function(err, num, raw) {
    if (err)
    res.send(err);

    res.json({ message: num + ' updated' });
  });
};




// // Create endpoint /api/beers/:beer_id for GET
// exports.getBeer = function(req, res) {
//   // Use the Beer model to find a specific beer
//   Beer.find({ userId: req.user._id, _id: req.params.beer_id }, function(err, beer) {
//     if (err)
//       res.send(err);
//
//     res.json(beer);
//   });
// };
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











// Machalí
// Malloa
// Mostazal
// Olivar
// Peumo
// Pichidegua
// Quinta de Tilcoco
// {
// 	"name":"Region de Valparaíso",
// 	"isActive":true,
// 	"communes":[
// 		{
// 			"name": "Rancagua",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Codegua",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Coinco",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Coltauco",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Doñihue",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Graneros",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Las Cabras",
// 			"isActive":false
//
// 		},
// 		{
// 			"name":  "Isla de Pascua",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Los Andes",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Calle arga",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Rinconada",
// 			"isActive":false
// 		},
// 		{
// 			"name": "San Esteban",
// 			"isActive":false
// 		},
// 		{
// 			"name":"La Ligua",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Cabildo",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Papudo",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Petorca",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Zapallar",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Quillota",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Calera",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Hijuelas",
// 			"isActive":false
// 		},
// 		{
// 			"name":"La Cruz",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Nogales",
// 			"isActive":false
// 		},
// 		{
// 			"name":"San Antonio",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Algarrobo",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Cartagena",
// 			"isActive":false
// 		},
// 		{
// 			"name":"El Quisco",
// 			"isActive":false
// 		},
// 		{
// 			"name":"El Tabo",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Santo Domingo",
// 			"isActive":false
// 		},
// 		{
// 			"name":"San Felipe",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Catemu",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Llaillay",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Panquehue",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Putaendo",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Santa María",
// 			"isActive":false
// 		},
// 		{
// 			"name": "Quilpué",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Limache",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Olmué",
// 			"isActive":false
// 		},
// 		{
// 			"name":"Villa Alemana",
// 			"isActive":false
// 		}
// 		]
// }
// "comunas": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
