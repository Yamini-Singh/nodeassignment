// Import required modules.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creation of Schema
var studentSchema = new Schema({
    studentId: { type: Number },
    name: { type: String, unique: true },
    stream: { type: String },
    year: { type: Number },
    semester: { type: Number },
    univName: { type: String},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

// we need to create a model for using schema
var Student = mongoose.model('studnt', studentSchema);

module.exports = Student;
