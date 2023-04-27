const ConsultationModel = require('../models/ConsultationModel');


const PostConsultFunction = async (req, res) => {

    try {

        const { firstName, lastName, email, phone, gender, age, address, city, state, country, problem } = req.body;


        if (!firstName || !lastName || !email || !phone || !gender || !age || !address || !city || !state || !country || !problem) {
            return res.status(401).json({ message: "Please fill all the fields" });
        }

        // Checking if the User has entered the correct phone number.
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(402).json({ error: "Please enter a valid phone number" });
        }

        const consultation = new ConsultationModel({
            firstName,
            lastName,
            email,
            phone,
            gender,
            age,
            address,
            city,
            state,
            country,
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

module.exports = PostConsultFunction;