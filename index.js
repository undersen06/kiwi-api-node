// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var RegionsController = require('./controllers/region');
var CommuneController = require('./controllers/commune');


// var userController = require('./controllers/user');
// var addressController = require('./controllers/user');

// var authController = require('./controllers/auth');



// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/reciclapp');

// create var from nodemailer



// Create our Express application
var app = express();

// Use the body-parser package in our application
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.use(bodyParser.json({
     extended: true
}))


// Create our Express router
var router = express.Router();

// Create endpoint handlers for /beers
router.route('/regions')
.get(RegionsController.getRegions)
.post(RegionsController.createRegion);

// router.route('/regions/:region_id')
// .delete(RegionsController.delete)

router.route('/regions/:region_id/enable')
.get(RegionsController.enableRegion)

router.route('/regions/:region_id/disable')
.get(RegionsController.disableRegion)


router.route('/commune')
.get(CommuneController.getCommunes)
.post(CommuneController.createCommune);

router.route('/commune/:commune_id')
.get(CommuneController.getCommune);

// Create endpoint handlers for /beers/:beer_id
// router.route('/beers/:beer_id')
//   .get(authController.isAuthenticated,beerController.getBeer)
//   .put(authController.isAuthenticated,beerController.putBeer)
//   .delete(authController.isAuthenticated,beerController.deleteBeer);
//
//
//   router.route('/users')
//     .post(userController.postUsers)
//     .get(authController.isAuthenticated,userController.getUsers);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);
