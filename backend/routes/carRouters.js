// backend/routes/carRoutes.js
const express = require('express');
const carController = require('../controllers/carController');

const router = express.Router();

router.get('/cars', carController.getAllCars);

module.exports = router;
