const ConsultationModel = require('../models/ConsultationModel');


const PostConsultFunction = async (req, res) => {

    try {

        const { firstName, lastName, email, phone, gender, age, address, city, mode, doctor, state, country, problem, utr } = req.body;

        if (!firstName || !lastName || !email || !phone || !gender || !age || !address || !city || !mode || !doctor || !state || !country || !problem || !utr) {
            return res.status(401).json({ message: "Please fill all the fields" });
        }

        // Checking if the User has entered the correct phone number.
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(402).json({ error: "Please enter a valid phone number" });
        }

        console.log(utr);

        const consultation = new ConsultationModel({
            firstName,
            lastName,
            email,
            phone,
            gender,
            age,
            address,
            city,
            mode,
            doctor,
            state,
            country,
            utr,
            problem
        });

        const consultationData = await consultation.save();

        if (consultationData) {
            res.status(200).json({ message: "Consultation Data Saved Successfully" });
        } else {
            res.status(403).json({ error: "Consultation Data did not saved." });
        }

    } catch (error) {

    }
}


const ConsultationGetFun = async (req, res) => {

    try {
        const ConsultationData = await ConsultationModel.find();
        res.status(200).send(ConsultationData);

    } catch (error) {
        console.log("Error while getting the Consultation Data" + error);
    }
}


const ConsultationDeleteFun = async (req, res) => {
    try {
        const ConsultationId = req.params.id;
        const deletedConsult = await ConsultationModel.findByIdAndDelete(ConsultationId);
        res.status(200).send("Consultation data deleted successfully");
    } catch (error) {
        console.log("Error while deleting the Consultation okk " + error);
        res.status(500).send("Error while deleting the Consultation");
    }
};

module.exports = { PostConsultFunction, ConsultationGetFun, ConsultationDeleteFun };