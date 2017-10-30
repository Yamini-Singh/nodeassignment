// Import required modules.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creation of Schema
var univSchema = new Schema({
    univId: { type: Number },
    univName: { type: String, unique: true },
    city: { type: String },
    state: { type: String },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

// we need to create a model for using schema
var University = mongoose.model('univ', univSchema);

module.exports = University;
