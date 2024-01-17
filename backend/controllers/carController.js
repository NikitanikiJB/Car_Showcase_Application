// backend/controllers/carController.js
const Car = require('../models/carModel');

// Sample controller logic
exports.getAllCars = (req, res) => {
    Car.find({}, (err, cars) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(cars);
        }
    });
};
