const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


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

        const newUser = new UserModel({
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

        const userData = await newUser.save();
        console.log(userData);

        const token = jwt.sign({ _id: userData._id }, "iamnewuser");
        console.log(token);

        if (userData) {
            res.status(200).json({ message: "User Registered Successfully" });
        } else {
            res.status(402).json({ error: "User did not Registered Successfully" });
        }

    } catch (error) {
        console.log("This is the resister error " + error);
    }
};

const LoginFunction = async (req, res) => {

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
        return res.status(401).json({ message: "This email does not exist. Please register first." });
    }

    const token = jwt.sign({ _id: user._id }, "iamnewuser");
    console.log(token);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(402).json({ message: "Incorrect Password" });
    } else {
        res.cookie("token", token, {httpOnly : true});
        return res.status(200).json({ message: "User Logged in Successfully" });
    }
};

const LogoutFunction = async(req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now())
    });
    return res.status(200).json({ message: "User Logged out Successfully" });
}

module.exports = { RegisterFunction, LoginFunction, LogoutFunction };
