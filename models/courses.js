const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  code: String,
  description: String,
  credits: Number,
  department: String,
  prerequisites: [String],
  faculty_id: { type: String, required: true}
});

module.exports = mongoose.model('Course', courseSchema);
