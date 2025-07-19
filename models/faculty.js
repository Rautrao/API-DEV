const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  first_name: String,
  last_name: String,
  email: String,
  department: String,
  specilization: [String],
  office_location: String,
  office_hours: String
});

module.exports = mongoose.model('Faculty',facultySchema);