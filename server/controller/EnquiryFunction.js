const EnquiryModel = require('../models/EnquiryModel');

const EnquiryPostFun = async (req, res) => {

    const { yourName, phone, email, problem, date } = req.body;

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
        problem,
        date
    })

    const EnquiryData = await newEnquiry.save();
    console.log(EnquiryData);

    if (EnquiryData) {
        res.status(200).json({ message: "Enquiry Data Saved Successfully" });
    } else {
        res.status(402).json({ error: "Enquiry Data did not saved." });
    }
}

const EnquiryGetFun = async (req, res) => {
    try {
        const EnquiryData = await EnquiryModel.find();
        res.status(200).send(EnquiryData);
    } catch (error) {
        console.log("Error while getting the Enquiry Data" + error);
    }
}

const EnquiryDeleteFun = async (req, res) => {
    try {
        const enquiryId = req.params.id;
        const deletedEnquiry = await EnquiryModel.findByIdAndDelete(enquiryId);
        res.status(200).send("Enquiry deleted successfully");
    } catch (error) {
        console.log("Error while deleting the Enquiry" + error);
        res.status(500).send("Error while deleting the Enquiry");
    }
};

module.exports = { EnquiryPostFun, EnquiryGetFun, EnquiryDeleteFun };