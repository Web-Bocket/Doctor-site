const AppointmentModel = require('../models/AppointmentModel');


const AppointmentPostFun = async (req, res) => {

    try {

        const { name, email, city, date, phone, gender, patientStatus, message } = req.body;

        if (!name || !email || !city || !date || !phone || !gender || !patientStatus || !message) {
            return res.status(401).json({ message: "Please fill all the fields" });
        }

        // Checking if the User has entered the correct phone number.
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(401).json({ error: "Please enter a valid phone number" });
        }

        const newAppointment = new AppointmentModel({
            name,
            email,
            city,
            date,
            phone,
            gender,
            patientStatus,
            message
        });


        const AppointmentData = await newAppointment.save();

        if (AppointmentData) {
            res.status(200).json({ message: "Appointment Data Saved Successfully" });
        } else {
            res.status(402).json({ error: "Appointment Data did not saved." });
        }

    } catch (error) {

    }


}

module.exports = AppointmentPostFun;