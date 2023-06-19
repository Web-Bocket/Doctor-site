import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import './form.css';

import { ToastContainer, toast, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import onlineQR from '../../assets/upi_qr/upi_online.png';

const Form = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [mode, setMode] = useState("");
    const [doctor, setDoctor] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [problem, setProblme] = useState("");
    const [utr, setUTR] = useState("");


    const handleSubmit = () => {

        if (!firstName || !lastName || !gender || !address || !city || !mode ||  !state || !doctor || !country || !problem) {
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

        // Phone validation
        const phoneValidatoin = /^\d{10}$/;
        if (!phoneValidatoin.test(phone)) {
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
            // window.alert("Please enter the correct phone number")
            return;
        }

        // Age validation
        if (age && (age < 1 || age > 100)) {
            toast.info('Please enter a valid age (between 1 to 100', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // alert("Please enter a valid age (between 1 and 100)");
            return;
        }


        const utrValidation = /^\d{12}$/;
        if (!utrValidation.test(utr)) {
            toast.info('Please enter a valid 12-digit UPI Transaction ID', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
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
            mode,
            doctor,
            state,
            country,
            problem,
            utr
        }, { withCredentials: true })
            .then(() => {
                navigate('/thanks');
                console.log("Form Submitted Successfully");

                toast.info('Form Submitted Successfully', { theme: "dark" });
                return;
            })
            .catch((err) => {
                console.log("Error Occurred: " + err.message);
                // window.alert("Login First");

                toast.error('Login First', { theme: "dark" });
                return;
            });
    }

    return (
        <div className='form_parent'>
            <h1>Fill Online Consultation Form</h1>

            <div className='form_note'>
                <h2>Note:-</ h2>
                <ul>
                    <li>First Pay the sum amount and keep UIP Transaction ID or UTR ready</li>
                    <li>Now Fill the form with appropiate and correct information</li>
                    <li>After Payment make sure to paste 12 digit UPI Transaction ID Or UTR on the required field.</li>
                    <li>Don't use wrong phone number, other wise you will loose you change to get consultation</li>
                    <li>So that our team will verify your payment.</li>
                </ul>
            </div>

            <div className='form_parent_down'>

                <div className='form_div_two'>
                    <h1>Fill Form</h1>
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
                    {/* <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p> */}
                    {/* <img src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg' alt='contact img' /> */}

                    {/* I want to show two qr code if user select online mode then show online qr code and when user select offline mode then show offline qr code */}
                    <img src={onlineQR} alt='Phone Pay QR' />

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
                    <label className='input_radio_form'>
                        Mode
                        <select value={mode} onChange={(e) => setMode(e.target.value)}>
                            <option value="">Select Mode</option>
                            <option value="Online">Online</option>
                            {/* <option value="Offline">Offline</option> */}
                        </select>
                    </label>
                    <input type='text' onChange={(e) => setDoctor(e.target.value)} placeholder='Select Doctor' />
                    <input type='number' onChange={(e) => setAge(e.target.value)} placeholder='Select Age' />
                    <input type='text' onChange={(e) => setAddress(e.target.value)} placeholder='Enter Your Address' />
                    <input type='text' onChange={(e) => setCity(e.target.value)} placeholder='Enter Your City' />
                    <input type='text' onChange={(e) => setState(e.target.value)} placeholder='Enter Your State' />
                    <input type='text' onChange={(e) => setCountry(e.target.value)} placeholder='Enter Your Country' />
                    <input type='text' onChange={(e) => setUTR(e.target.value)} placeholder='Enter UPI Transaction ID or UTR' />
                    <textarea rows="5" onChange={(e) => setProblme(e.target.value)} placeholder='Your query/health problem' />
                    <Button onClick={handleSubmit}>Send Details</Button>
                </div>

            </div>

            <ToastContainer />
        </div>
    )
}

export default Form