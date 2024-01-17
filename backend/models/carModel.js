// backend/models/carModel.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    // ... add other fields based on your requirements
});

module.exports = mongoose.model('Car', carSchema);
