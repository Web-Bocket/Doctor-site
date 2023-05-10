const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// REGISTER User
const RegisterFunction = async (req, res) => {
    try {
        const {
            patientName,
            // patientCode,
            city,
            // photo,
            mobileNumber,
            email,
            state,
            pinNo,
            bloodGroup,
            diseases,
            category,
            password
        } = req.body;

        if (
            !patientName ||
            // !patientCode ||
            !city ||
            // !photo ||
            !mobileNumber ||
            !email ||
            !state ||
            !pinNo ||
            !bloodGroup ||
            !diseases ||
            !category
        ) {
            return res.status(400).json({ error: "Please fill all the fields" });
        }

        const existEmail = await UserModel.findOne({ email: email });
        if (existEmail) {
            return res
                .status(401)
                .json({ message: "This email already exists. Please log in instead." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            patientName,
            // patientCode,
            city,
            // photo,
            mobileNumber,
            email,
            state,
            pinNo,
            bloodGroup,
            diseases,
            category,
            password: hashedPassword
        });

        const savedUser = await user.save();

        if (savedUser) {
            const token = jwt.sign({ _id: savedUser._id }, process.env.SECRET, {
                expiresIn: "1h"
            });

            res.cookie("token", token, {
                // httpOnly: true,
                maxAge: 60 * 60 * 1000 // 1 hour
            });

            res.status(200).json({ message: "User registered successfully" });
        } else {
            res.status(500).json({ error: "Failed to save user" });
        }
    } catch (error) {
        console.log("This is the register error " + error);
        res.status(500).json({ error: "Failed to register user" });
    }
};


// LOGIN User
const LoginFunction = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill all the fields" });
        }

        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res
                .status(401)
                .json({ message: "This email does not exist. Please register first." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(402).json({ message: "Incorrect Password" });
        }

        const token = await jwt.sign({ _id: user._id }, process.env.SECRET);
        console.log(token);

        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 6000000),
        });

        return res
            .status(200)
            .json({ message: "User Logged in Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// LOGOUT User
const LogoutFunction = async (req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now())
        });
        return res.status(200).json({ message: "User Logged out Successfully" });
    } catch (error) {
        console.log("Error while logging out: ", error);
        return res.status(500).json({ error: "An error occurred while logging out" });
    }
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
