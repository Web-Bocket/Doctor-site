const EnquiryModel = require('../models/EnquiryModel');


const EnquiryPostFun = async (req, res) => {

    const { yourName, phone, email, problem } = req.body;

    if (!yourName || !phone || !email || !problem) {
        return res.status(401).json({ message: "Please fill all the fields" });
    }

    // Checking if the User has entered the correct phone number.
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        return res.status(401).json({ error: "Please enter a valid phone number" });
    }

    const newEnquiry = new EnquiryModel({
        yourName,
        phone,
        email,
        problem
    })

    const EnquiryData = await newEnquiry.save();
    console.log(EnquiryData);

    if (EnquiryData) {
        res.status(200).json({ message: "Enquiry Data Saved Successfully" });
    } else {
        res.status(402).json({ error: "Enquiry Data did not saved." });
    }


}

module.exports = EnquiryPostFun;