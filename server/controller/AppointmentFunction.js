const AppointmentModel = require('../models/AppointmentModel');


const AppointmentPostFun = async (req, res) => {
    try {

        const { name, email, city, time, date, phone, gender, patientStatus, mode, message } = req.body;

        if (!name || !email || !city || !time || !date || !phone || !gender || !mode || !patientStatus || !message) {
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
            time,
            date,
            phone,
            gender,
            mode,
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

const AppointmentGetFun = async (req, res) => {
    try {
        const AppointmentData = await AppointmentModel.find();
        res.status(200).send(AppointmentData);
        // res.render('appointment', { appointments: AppointmentData });
    } catch (error) {
        console.log("Error while getting the Appointment Data" + error);
    }
}

const AppointmentDeleteFun = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const deletedAppointment = await AppointmentModel.findByIdAndDelete(appointmentId);
        res.status(200).send("Appointment deleted successfully");
    } catch (error) {
        console.log("Error while deleting the Appointment" + error);
        res.status(500).send("Error while deleting the Appointment");
    }
};

module.exports = { AppointmentPostFun, AppointmentGetFun, AppointmentDeleteFun };