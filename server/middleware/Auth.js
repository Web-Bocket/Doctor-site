const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const express = require('express');
const router = express.Router();

// router.get('/test', (req, res) => {
//     console.log("This is the Cookies " + req.cookies.token);
//     res.send("Test Endpoint");
// });


const isAuthenticated = async (req, res, next) => {

    const { token } = req.cookies;
    console.log("Backend Token " + token);

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Login First"
        });
    }

    const decodeData = jwt.verify(token, process.env.SECRET);
    req.user = await UserModel.findById(decodeData._id);
    next();
};

module.exports = isAuthenticated;