// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var RegionsController = require('./controllers/region');
var CommuneController = require('./controllers/commune');
var TipsController = require('./controllers/tips');
var AuthController = require('./controllers/admin');

var SettinsController = require('./controllers/admin');

var Admin =  require('./models/admin');
var jsonwebtoken = require("jsonwebtoken");



// var userController = require('./controllers/user');
// var addressController = require('./controllers/user');

// var authController = require('./controllers/auth');



// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/reciclapp');

// create var from nodemailer



// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({
     extended: true
}))

app.use(function(req,res,next){
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
    jsonwebtoken.verify(req.headers,authorization.split(' ')[1],'RESTFULAPIs',function(err,ddecode){
        if(err) req.user = undefined;
        req.user =  decode;
        next();

    });
  }else{
    req.user = undefined;
    next();
  }
})

// Create our Express router
var router = express.Router();


// Create endpoint handlers for /regions
router.route('/regions')
.get(RegionsController.getRegions)
.post(RegionsController.createRegion);

router.route('/regions/:region_id/enable')
.get(RegionsController.enableRegion)

router.route('/regions/:region_id/disable')
.get(RegionsController.disableRegion)


// Create endpoint handlers for /tips
router.route('/tips')
.get(TipsController.getTips)
.post(TipsController.createTip);

router.route('/tips/:tip_id/enable')
.get(TipsController.enableTip)

router.route('/regions/:tip_id/disable')
.get(TipsController.disableTip)


// Create endpoint handlers for /commune
router.route('/auth/admin/create')
.post(AuthController.register);

router.route('/auth/admin/sign_in')
.post(AuthController.sign_in);

router.route('/settings/enable/:id')
.post(AuthController.sign_in);


// Create endpoint handlers for /beers/:beer_id

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
