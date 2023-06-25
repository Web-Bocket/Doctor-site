import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyVerticallyCenteredModal(props) {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    time: "",
    email: "",
    date: "",
    phone: "",
    message: "",
    patientStatus: "",
    mode: "",
    gender: ""
  });

  const { name, city, time, email, date, phone, message, patientStatus, mode, gender } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClearFields = () => {
    setFormData({
      name: "",
      city: "",
      time: "",
      email: "",
      date: "",
      phone: "",
      message: "",
      patientStatus: "",
      mode: "",
      gender: ""
    });
  };

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (!name || !city || !time || !email || !date || !phone || !message || !patientStatus || !mode || !gender) {
      toast.info('Please fill all the fields', { theme: "dark" });
      return;
    }

    // Check if email address is valid
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      toast.info('Please enter a valid email address', { theme: "dark" });
      return;
    }

    const phoneValidation = /^\d{10}$/;
    if (!phoneValidation.test(phone)) {
      toast.info('Please enter the correct phone number without +91', { theme: "dark" });
      return;
    }

    axios
      .post("http://localhost:5000/appointment", formData, { withCredentials: true })
      .then(() => {
        handleClearFields();
        toast.success('Appointment Booked Successfully', { theme: "dark" });
        console.log("Appointment Booked Successfully");
      })
      .catch((err) => {
        toast.error('Login First', { theme: "dark" });
        console.log("Error Occurred: " + err.message);
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="model_body">
        {/* Rest of the code remains the same */}

        <input
          required
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Your Name *"
        />

        <input
          required
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your Email *"
        />
        <input
          required
          name="date"
          value={date}
          onChange={handleChange}
          type="date"
        />
        <input
          required
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Your-Phone No"
        />
        <label className="input_radio">
          Select Patient Type:
          <select
            required
            name="patientStatus"
            value={patientStatus}
            onChange={handleChange}
          >
            <option value="">Select patient type</option>
            <option value="Old">Old</option>
            <option value="New">New</option>
          </select>
        </label>

        <label className="input_radio">
          Select Mode:
          <select required name="mode" value={mode} onChange={handleChange}>
            <option value="">Select Appointment Mode</option>
            <option value="Old">Online</option>
            <option value="New">Offline</option>
          </select>
        </label>

        <label className="input_radio">
          Select Gender:
          <select required name="gender" value={gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label className="input_radio">
          Select Appointment City:
          <select required name="city" value={city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Khordha">Khordha</option>
            <option value="Brahampur">Brahampur</option>
          </select>
        </label>


        <label className="input_radio">
          Select Appointment Time:
          <select required name="time" value={time} onChange={handleChange}>
            <option value="">Select Time</option>
            <option value="Khordha - 10-2pm">Khordha - 10-2pm</option>
            <option value="Brahampur 9-1pm & 5:50-9pm">Brahampur 9-1pm & 5:50-9pm</option>
          </select>
        </label>

        <textarea
          value={message}
          required
          name="message"
          className="navbar_textarea"
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
        />
        <Button onClick={handleSubmit}>Send</Button>
      </Modal.Body>
      <ToastContainer />
    </Modal>
  );
}

export default MyVerticallyCenteredModal;



