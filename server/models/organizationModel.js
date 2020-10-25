const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here
const organizationSchema = new Schema({
    organizationId:  {type: Number, required: true},
    name: {type: String, required: true},
    address:  {type: Array, required: true},
    admins:  {type: Array, required: true},
    reviews:  {type: Array, required: false},
    rating_timeseries: {type: Array, required: false},
    quantity_timeseries: {type: Array, required: false},
    quality_timeseries: {type: Array, required: false},
    accessibility_timeseries: {type: Array, required: false},
    avg_rating:  {type: Number, required: false},
    avg_quantity:  {type: Number, required: false},
    avg_quality:  {type: Number, required: false},
    avg_accessibility:  {type: Number, required: false}

});

// You must export your model through module.exports
// The collection name should be 'users'
module.exports = mongoose.model('organizations', organizationSchema);