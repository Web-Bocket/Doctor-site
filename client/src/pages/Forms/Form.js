import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import './form.css';

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [problem, setProblme] = useState("");

    const handleSubmit = () => {

        if (!firstName || !lastName || !gender || !address || !city || !state || !country || !problem) {
            window.alert("Please fill in all required fields.");
            return;
        }

        // Check if email address is valid
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            window.alert("Please enter a valid email address.");
            return;
        }

        // Phone validation
        const phoneValidatoin = /^\d{10}$/;
        if (!phoneValidatoin.test(phone)) {
            window.alert("Please enter the correct phone number")
            return;
        }

        // Age validation
        if (age && (age < 1 || age > 100)) {
            alert("Please enter a valid age (between 1 and 100)");
            return;
        }

        axios.post("http://localhost:5000/consultation", {
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
        }).then(() => {
            window.alert("Form Submitted Successfully");
            console.log("Form Submitted Successfully");
        }).catch((err) => {
            console.log("Error Occured " + err.message);
            window.alert("An error occurred: " + err.response.data);
        })
    }

    return (
        <div className='form_parent'>
            <h1>Fill Online Consultation Form</h1>
            <div className='form_parent_down'>

                <div className='form_div_two'>
                    <h1>Fill Form</h1>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <img src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg' alt='contact img' />
                </div>

                <div className='form_div_one'>
                    <input type='text' onChange={(e) => setFirstName(e.target.value)} placeholder='Enter Your First Name' required />
                    <input type='text' onChange={(e) => setLastName(e.target.value)} placeholder='Enter Your Last Name' />
                    <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email ID' />
                    <input type='text' onChange={(e) => setPhone(e.target.value)} placeholder='Enter Phone/Mobild No.' />
                    <label className='input_radio_form'>
                        Gender
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <input type='number' onChange={(e) => setAge(e.target.value)} placeholder='Select Age' />
                    <input type='text' onChange={(e) => setAddress(e.target.value)} placeholder='Enter Your Address' />
                    <input type='text' onChange={(e) => setCity(e.target.value)} placeholder='Enter Your City' />
                    <input type='text' onChange={(e) => setState(e.target.value)} placeholder='Enter Your State' />
                    <input type='text' onChange={(e) => setCountry(e.target.value)} placeholder='Enter Your Country' />
                    <textarea rows="5" onChange={(e) => setProblme(e.target.value)} placeholder='Your query/health problem' />
                    <Button onClick={handleSubmit}>Send Details</Button>
                </div>


            </div>

        </div>
    )
}

export default Form