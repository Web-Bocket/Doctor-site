const jwt = require('jsonwebtoken');


const AdminUserFunction = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields"
        });
    }


    const user = "good@gmail.com";
    const passwordOne = "12345";


    if (email == user && password === passwordOne) {

        console.log(email, password);

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        
        console.log(token);

        res.status(200).cookie("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
        }).json({
            success: true,
            message: "Admin Loggin Successfully"
        });
    }
}
module.exports = { AdminUserFunction };