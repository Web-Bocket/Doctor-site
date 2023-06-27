const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  yourName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now
  }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
module.exports = Enquiry;