import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import './auth.css';
import NavLink from 'react-bootstrap/esm/NavLink';
import LoginImage from '../../assets/login_two_one.png';
import { useNavigate } from 'react-router-dom';

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


    const handleRegister = async (e) => {
        e.preventDefault();

        if (!patientName || !city || !mobileNumber || !email || !state || !pinNo || !bloodGroup || !diseases || !category || !password) {
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
            return;
        }



        const response = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
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
            })
        })

        const data = await response.json();
        console.log(data);

        if (response.status === 401) {
            window.alert(data.message);
        } else {
            window.alert(data.message);
            console.log("Login Successfully");
            navigate('/login');
        }
    }

    return (
        <div className='login_parent'>
            <div className='login_div'>

                <div className='input_login_div'>
                    <h1>Register</h1>
                    <input type='text' placeholder='Patient Name' onChange={(e) => setPatientName(e.target.value)} />
                    <input type='text' placeholder='City' onChange={(e) => setCity(e.target.value)} />
                    <input type='text' placeholder='Mobile No' onChange={(e) => setMobile(e.target.value)} />
                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' placeholder='State' onChange={(e) => setState(e.target.value)} />
                    <input type='number' placeholder='Pin No' onChange={(e) => setPin(e.target.value)} />
                    <input type='text' placeholder='Blood Group' onChange={(e) => setBlood(e.target.value)} />
                    {/* <label className='input_radio_form'>
                        Blood Group
                        <select value={bloodGroup} onChange={(e) => setBlood(e.target.value)}>
                            <option value="">Select BloodGroup</option>
                            <option value="O+">O+</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>

                        </select>
                    </label> */}
                    <label className='input_radio_form'>
                        Diseases
                        <select value={diseases} onChange={(e) => setDiseases(e.target.value)}>
                            <option value="">Select Diseases</option>
                            <option value="Diseases 1">Diseases 1</option>
                            <option value="Diseases 2">Diseases 2</option>
                            <option value="Diseases 3">Diseases 3</option>

                        </select>
                    </label>
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