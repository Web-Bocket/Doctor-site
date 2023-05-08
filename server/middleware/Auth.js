const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send("Unauthorized: No token provided");
        }

        const decoded = await jwt.verify(token, process.env.SECRET);
        const user = await UserModel.findById(decoded._id);
        if (!user) {
            return res.status(401).send("Unauthorized: Invalid token");
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
};

module.exports = isAuthenticated;