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
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
module.exports = Enquiry;