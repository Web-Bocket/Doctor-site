import React, { useState } from 'react';
import axios from 'axios';
import './enquiry.css';

const Enquiry = () => {
  const [yourName, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setSubject] = useState("");
  const [errors, setErrors] = useState({});
  const [problemError, setProblemError] = useState("");

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Validate name
    if (!yourName.trim()) {
      formIsValid = false;
      errors["yourName"] = "Name cannot be empty";
    }

    // Validate email
    if (!email.trim()) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Email address is invalid";
    }

    // Validate phone
    if (phone.trim() && !/^\d{10}$/.test(phone)) {
      formIsValid = false;
      errors["phone"] = "Phone number is invalid";
    }

    // Validate Problem
    if (!problem.trim()) {
      setProblemError("Subject/Problem Field is required");
      return;
    } else {
      setProblemError("");
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      axios
        .post("http://localhost:5000/enquiry", {
          yourName,
          phone,
          email,
          problem,
        })
        .then(() => {
          console.log("Message Send Successfully");
        })
        .catch((err) => {
          console.log({ Error: err.message });
        });
    }
  };

  return (
    <div className='enquiry_parent'>
      <div className='enquiry_field'>
        <h1>OUR CONSULTATION CHARGES:</h1>
        <p>
          Consultation Fees: <span> Rs 500/- per month</span>
        </p>
        <h1>ENQUIRY</h1>
        <p>
          If you have any questions simply use the form below. We try and
          respond to all queries and comments.
        </p>

        <div className='input_enquiry_field'>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            placeholder='Your Name*'
            value={yourName}
          />
          {errors.yourName && (
            <span className='error'>{errors.yourName}</span>
          )}
          <input
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Phone'
            value={phone}
          />
          {errors.phone && <span className='error'>{errors.phone}</span>}
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email*'
            value={email}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
          <textarea
            rows='4'
            required
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Subject/Problem'
            value={problem}
          />
          {problemError && <span className='error'>{problemError}</span>}


          <button onClick={handleSubmit}>SEND</button>
        </div>
      </div>

      <div className='table_hours'>
        <h1>Consultation Hours</h1>
        <table>
          <tr>
            <th>Day</th>
            <th>Timings</th>
          </tr>
          <tr>
            <td>Monday</td>
            <td>10:00am - 04:00 pm</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>10:00am - 04:00 pm</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>10:00am - 04:00 pm</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>02:00am - 08:00 pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>02:00am - 08:00 pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>02:00am - 08:00 pm</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>11:00am - 02:00 pm</td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default Enquiry