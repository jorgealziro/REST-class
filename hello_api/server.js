var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Vehicle = require('./app/models/vehicle');

// Configure app for bodyParser()
// Grabs data from body of POST object
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setting LISTEN port to 3000
var port = process.env.PORT || 3000;

// Connects to MongoDB
mongoose.connect('mongodb://localhost:27017/codealong');

// API Routes
var router = express.Router();

// Prefixing routes with /api
app.use('/api', router);

// Middleware for validations, logging info, stopping unsafe requests
router.use(function(req, res, next){
    console.log('Processing...');
    next();
});

// Test Route
router.get('/', function(req, res){
    res.json({message: 'Welcome to the API'});
});

router.route('/vehicles')

    .post(function(req,res){
        var vehicle = new Vehicle(); // new instance of a vehicle
        vehicle.make = req.body.make;
        vehicle.model = req.body.model;
        vehicle.color = req.body.color;

        vehicle.save(function(err){
            if (err) {
                res.send(err);
            }
            res.json({message: 'Vehicle successfuly added.'});
        });
    })

    .get(function(req, res) {
        Vehicle.find(function(err, vehicles){
            if (err) {
                res.send(err);
            }
            res.json(vehicles);
        });
    });

router.route('/vehicle/:vehicle_id')
    .get(function(req, res){
        Vehicle.findById(req.params.vehicle_id, function(err, vehicle){
            if (err) {
                res.send(err);
            }
            res.json(vehicle);
        });
    });

router.route('/vehicle/make/:make')
    .get(function(req, res){
        Vehicle.find({make:req.params.make}, function(err, vehicle){
            if (err){
                res.send(err);
            }
            res.json(vehicle);
        });
    });

router.route('/vehicle/color/:color')
    .get(function(req, res){
        Vehicle.find({color:req.params.color}, function(err, vehicle){
            if (err){
                res.send(err);
            }
            res.json(vehicle);
        });
    });

// Start Server
app.listen(port);

// Print message to console
console.log('Server listening on port ' + port);
