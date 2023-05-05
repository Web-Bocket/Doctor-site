import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyVerticallyCenteredModal(props) {
    const [name, setYourName] = useState("");
    const [city, setYourCity] = useState("");
    const [email, setYourEmail] = useState("");
    const [date, setDate] = useState("");
    const [phone, setYourPhone] = useState("");
    const [message, setMessage] = useState("");
    const [patientStatus, setPatientStatus] = useState("");
    const [gender, setGender] = useState("");

    const handleClearFields = () => {
        setYourName("");
        setYourCity("");
        setYourEmail("");
        setDate("");
        setYourPhone("");
        setMessage("");
        setPatientStatus("");
        setGender("");
    };


    const handleSubmit = () => {
        // Check if all required fields are filled
        if (!name || !email || !date || !message || !patientStatus || !gender) {
            // window.alert("Please fill in all required fields.");

            toast.info('Please fill all the fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            return;
        }

        // Check if email address is valid
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            // window.alert("Please enter a valid email address.");

            toast.info('Please enter a valid email address', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            return;
        }

        const phoneValidatoin = /^\d{10}$/;
        if (!phoneValidatoin.test(phone)) {
            // window.alert("Please enter the correct phone number");

            toast.info('Please enter the correct phone number without +91', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        axios.post("http://localhost:5000/appointment", {
            name,
            city,
            email,
            date,
            phone,
            message,
            patientStatus,
            gender,
        }).then(() => {
            handleClearFields();
            toast.success('Appointment Booked Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // window.alert("Appointment Book Successfully");
            console.log("Appointment Book Successfully");
        }).catch((err) => {
            console.log("Error Occured " + err.message);
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Book Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='model_body'>
                <input required value={name} onChange={(e) => setYourName(e.target.value)} placeholder='Your Name *' />
                <input required value={city} onChange={(e) => setYourCity(e.target.value)} placeholder="Your City" />
                <input required value={email} onChange={(e) => setYourEmail(e.target.value)} placeholder='Your Email *' />
                <input required value={date} onChange={(e) => setDate(e.target.value)} type='date' />
                <input required value={phone} onChange={(e) => setYourPhone(e.target.value)} placeholder='Your-Phone No' />
                <label className='input_radio'>
                    Select Patient Type:
                    <select required value={patientStatus} onChange={(e) => setPatientStatus(e.target.value)}>
                        <option value="">Select patient type</option>
                        <option value="Old">Old</option>
                        <option value="New">New</option>
                    </select>
                </label>

                <label className='input_radio'>
                    Choose an option:
                    <select required value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>

                <textarea value={message} required className='navbar_textarea' onChange={(e) => setMessage(e.target.value)} rows="4" placeholder='Your Message' />
                <Button onClick={handleSubmit}>Send</Button>
            </Modal.Body>
            <ToastContainer />
        </Modal>
    );


}
export default MyVerticallyCenteredModal;



