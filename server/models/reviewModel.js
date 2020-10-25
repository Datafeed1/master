const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here
const reviewSchema = new Schema({
    reviewId: {type: Number, required: true},
    timestamp : {type: Number, required: true},
    length : {type: String, required: true},
    location : {type: String, required: true},
    rating : {type: Number, required: true},
    quantity : {type: Number, required: true},
    quality : {type: Number, required: true},
    accessibility :{type: Number, required: true},
    long_form : {type:String, required: true}
});

// You must export your model through module.exports
// The collection name should be 'users'
module.exports = mongoose.model('reviews', reviewSchema);