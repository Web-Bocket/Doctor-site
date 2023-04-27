import React, { useState } from 'react';
import axios from 'axios';
import './enquiry.css';

const Enquiry = () => {

  const [yourName, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setSubject] = useState("");


  const handleSubmit = () => {

    axios.post("http://localhost:5000/enquiry", {
      yourName,
      phone,
      email,
      problem
    }).then(() => {
      console.log("Message Send Successfully");
    }).catch((err) => {
      console.log({ Error: err.message });
    })

  }


  return (

    <div className='enquiry_parent'>
      <div className='enquiry_field'>
        <h1>OUR CONSULTATION CHARGES:</h1>
        <p>Consultation Fees: <span> Rs 500/- per month</span></p>
        <h1>ENQUIRY</h1>
        <p>If you have any questions simply use the form below. We try and respond to all queries and comments.</p>

        <div className='input_enquiry_field'>

          <input required onChange={(e) => setName(e.target.value)} placeholder='Your Name*' />
          <input onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />

          <input onChange={(e) => setEmail(e.target.value)} placeholder='Your Email*' />
          <textarea rows="4" onChange={(e) => setSubject(e.target.value)} placeholder='Subject/Problem' />

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