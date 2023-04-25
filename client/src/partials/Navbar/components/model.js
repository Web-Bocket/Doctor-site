import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {

    const [name, setYourName] = useState("");
    const [city, setYourCity] = useState("");
    const [email, setYourEmail] = useState("");
    const [date, setDate] = useState("");
    const [phone, setYourPhone] = useState("");
    const [message, setMessage] = useState("");
    const [patientStatus, setPatientStatus] = useState("");
    const [gender, setGender] = useState("Male");


    const handleSubmit = () => {
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
            window.alert("Appointment Book Successfully")
            console.log("Appointment Book Successfully")
        }).catch((err) => {
            console.log("Error Occured " + err.message);
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Book Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='model_body'>

                <div>
                    <input onChange={(e) => setYourName(e.target.value)} placeholder='Your Name *' />
                    <input onChange={(e) => setYourCity(e.target.value)} placeholder="Your City" />
                </div>
                <div>
                    <input onChange={(e) => setYourEmail(e.target.value)} placeholder='Your Email *' />
                    <input onChange={(e) => setDate(e.target.value)} type='date' />
                </div>
                <div>
                    <input onChange={(e) => setYourPhone(e.target.value)} placeholder='Your-Phone No' />
                    <label className='input_radio'>
                        Select Patient Type:
                        <select value={patientStatus} onChange={(e) => setPatientStatus(e.target.value)}>
                            <option value="">Select patient type</option>
                            <option value="Old">Old</option>
                            <option value="New">New</option>
                        </select>
                    </label>
                </div>

                <label className='input_radio'>
                    Choose an option:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>

                    </select>
                </label>

                <textarea className='navbar_textarea' onChange={(e) => setMessage(e.target.value)} rows="4" placeholder='Your Message' />
                <Button onClick={handleSubmit}>Send</Button>

            </Modal.Body>
        </Modal>
    );
}


export default MyVerticallyCenteredModal;