
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here
const userSchema = new Schema({
    userId: {type: Number, required: true},
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    schedule : {type: Array, required: false},
    days:  {type: Array, required: false},
    currentSchedule: {type: Object, required: false},
    address : {type: String, required: true},
    user_type : {type: String, required: true},
    reviews : {type: Array, required: false},
    organization :{type: String, required: true},
    last_active : {type: String, required: true}
});

// You must export your model through module.exports
// The collection name should be 'users'
module.exports = mongoose.model('users', userSchema);