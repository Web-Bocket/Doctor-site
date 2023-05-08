const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

// AUTH User
const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (token) {
            const verifyToken = jwt.verify(token, process.env.SECRET);
            req.user = await UserModel.findById(verifyToken._id);
            next();
        } else {
            res.redirect('/login');
        }

    } catch (error) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(error);
    }
}

module.exports = isAuthenticated;