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
            password,
            date
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

        let user = await UserModel.findOne({ email: email });

        if (user) {
            return res
                .status(401)
                .json({ message: "This email already exists. Please log in instead." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await UserModel.create({
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
            password: hashedPassword,
            date
        });

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        console.log(token);

        res.status(200).cookie("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
        }).json({
            success: true,
            message: "User registered successfully"
        });

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
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            });
        }

        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return res
                .status(401)
                .json({
                    success: false,
                    message: "Invalid Email and Password"
                });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(402).json({
                success: false,
                message: "Invalid Email and Password"
            });
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        console.log(token);

        res.status(200).cookie("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
        });

        return res
            .status(200)
            .json({
                success: true,
                message: "User Logged in Successfully"
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


// LOGOUT User
const LogoutFunction = async (req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now())
        });
        return res.status(200).json({
            success: true,
            message: "User Logged out Successfully"
        });
    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Internal Server Issue " + error
        });
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
