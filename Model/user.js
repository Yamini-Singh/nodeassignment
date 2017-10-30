// Import required modules.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creation of Schema
var userSchema = new Schema({
    userId: { type: Number },
    name: { type: String, unique: true },  
    fatherName: { type: String },
    emailId: { type: String },
    phoneNumber: { type: Number },
    address: { type: String },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

// we need to create a model for using schema
var User = mongoose.model('usr', userSchema);

module.exports = User;
