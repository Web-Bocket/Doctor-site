const mongoose = require("mongoose");
// Patient name 
// Patient code
// City
// Photo 
// Mob. No.
// Mail id 
// State 
// Pin no.
// Blood group
// Disease
// Patient category 
// Date 


const userScheme = new mongoose.Schema({

    patientName: {
        type: String,
        required: true,
    },
    // patientCode: {
    //     type: String,
    //     required: true
    // },
    city: {
        type: String,
        required: true
    },
    // photo: {
    //     type: String,
    //     required: true,
    // },
    mobileNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pinNo: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    diseases: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    }
});

const User = mongoose.model("User", userScheme);
module.exports = User;