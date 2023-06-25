const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
    patientStatus: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;