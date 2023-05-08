const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// REGISTER User
const RegisterFunction = async (req, res) => {

    try {
        const { patientName, patientCode, city, photo, mobileNumber, email, state, pinNo, bloodGroup, diseases, category, password } = req.body;

        if (!patientName || !patientCode || !city || !photo || !mobileNumber || !email || !state || !pinNo || !bloodGroup || !diseases || !category) {
            return res.status(400).json({ error: "Please fill all the fields" });
        }

        const existEmail = await UserModel.findOne({ email: email });
        if (existEmail) {
            return res.status(401).json({ message: "This email already exists please go to login page" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            patientName,
            patientCode,
            city,
            photo,
            mobileNumber,
            email,
            state,
            pinNo,
            bloodGroup,
            diseases,
            category,
            password: hashPassword,
        });

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        console.log(token);

        const userData = await user.save();
        console.log(userData);

        if (userData) {

            res.cookie("Ourtoken", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 60000),
            });

            res.status(200).json({ message: "User Registered Successfully" });

        } else {
            res.status(402).json({ error: "User did not Registered Successfully" });
        }

    } catch (error) {
        console.log("This is the resister error " + error);
    }
};

// LOGIN User
const LoginFunction = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Please fill all the fields" });
        }

        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ message: "This email does not exist. Please register first." });
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        console.log(token);

        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 6000000),
        });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(402).json({ message: "Incorrect Password" });
        } else {
            return res.status(200).json({ token, message: "User Logged in Successfully" });
        }

    } catch (error) {
        
    }
};

// LOGOUT User
const LogoutFunction = async (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now())
    });
    return res.status(200).json({ message: "User Logged out Successfully" });
};


// GET User
const UserGetFun = async (req, res) => {
    try {
        const UserData = await UserModel.find();
        res.status(200).send(UserData);

    } catch (error) {
        console.log("Error while getting the User Data" + error);
    }
}

// DELETE User
const UserDeleteFun = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        res.status(200).send("User deleted successfully");
    } catch (error) {
        console.log("Error while deleting the User" + error);
        res.status(500).send("Error while deleting the User");
    }
};

module.exports = { RegisterFunction, LoginFunction, LogoutFunction, UserGetFun, UserDeleteFun };
