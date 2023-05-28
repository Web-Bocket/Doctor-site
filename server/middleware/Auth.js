const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {

        const token = req.cookies.token;
        console.log(token);

        if (!token) {
            return res.status(401).json({
                success : false,
                message : "Login First"
            });
        }

        const decodeData = jwt.verify(token, process.env.SECRET);
        req.user = await UserModel.findById(decodeData._id);
        next();
};

module.exports = isAuthenticated;