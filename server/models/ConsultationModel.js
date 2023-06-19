const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    problem: {
        type: String,
        required: true
    },
    utr : {
        type : String,
        required : true
    }
});

const Consultation = mongoose.model('Consultation', consultationSchema);
module.exports = Consultation;