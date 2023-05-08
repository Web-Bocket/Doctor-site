import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import './auth.css';
import NavLink from 'react-bootstrap/esm/NavLink';
import LoginImage from '../../assets/login_two_one.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const navigate = useNavigate();
    const [patientName, setPatientName] = useState("");
    const [patientCode, setPatientCode] = useState("");
    const [city, setCity] = useState("");
    const [photo, setPhoto] = useState("");
    const [mobileNumber, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [pinNo, setPin] = useState("");
    const [bloodGroup, setBlood] = useState("");
    const [diseases, setDiseases] = useState("");
    const [category, setCategory] = useState("");
    const [password, setPassword] = useState("");


    const handleRegister = (e) => {
        e.preventDefault();

        if (!patientName || !patientCode || !city || !photo || !mobileNumber || !email || !state || !pinNo || !bloodGroup || !diseases || !category || !password) {
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
        if (!phoneValidatoin.test(mobileNumber)) {
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

        axios.post("http://localhost:5000/register", {
            patientName,
            patientCode,
            city,
            photo,
            mobileNumber,
            email,
            state,
            pinNo,
            bloodGroup,
            diseases,
            category,
            password,
        }).then((res) => {

            if (res.status == 401) {
                console.log("This email already exists");
            }
            console.log("Register Successfully");
            navigate("/login");
        }).catch((err) => {
            console.log("Problem in the Register " + err);
        })
    }

    return (
        <div className='login_parent'>
            <div className='login_div'>

                <div className='input_login_div'>
                    <h1>Register</h1>
                    <input type='text' placeholder='Patient Name' onChange={(e) => setPatientName(e.target.value)} />
                    <input type='text' placeholder='Patient Code' onChange={(e) => setPatientCode(e.target.value)} />
                    <input type='text' placeholder='City' onChange={(e) => setCity(e.target.value)} />
                    <input type='text' placeholder='Photo' onChange={(e) => setPhoto(e.target.value)} />
                    <input type='text' placeholder='Mobile No' onChange={(e) => setMobile(e.target.value)} />
                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' placeholder='State' onChange={(e) => setState(e.target.value)} />
                    <input type='number' placeholder='Pin No' onChange={(e) => setPin(e.target.value)} />
                    <input type='text' placeholder='Blood Group' onChange={(e) => setBlood(e.target.value)} />
                    <input type='text' placeholder='Diseases' onChange={(e) => setDiseases(e.target.value)} />
                    <input type='text' placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

                    <Button onClick={handleRegister}>Register</Button>

                    <h5>Or</h5>
                    <p>If you have already account<NavLink className='nav_link' href="login">Login Here</NavLink></p>

                </div>
                <div className='img_login_div'>
                    <img src={LoginImage} alt='login img' />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Register