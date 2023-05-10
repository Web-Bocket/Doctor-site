import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import './auth.css';
import NavLink from 'react-bootstrap/esm/NavLink';
import LoginImage from '../../assets/login_two_one.png';

import { UserContext } from '../../App';

// import axios from 'axios';
// import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     axios.post('http://localhost:5000/login', {
    //         email,
    //         password,
    //     })
    //         .then((response) => {
    //             console.log('Login Successfully');
    //             // console.log(response);
    //             const token = response.data.token;
    //             console.log(token);
    //             navigate('/');
    //         })
    //         .catch((error) => {
    //             console.log('Problem in the Login ' + error);
    //             // Display error message to the user
    //         });
    // };


    // const handleLoginTwo = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const res = await fetch('/login', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "Application/json",
    //             },
    //             credentials: "include",
    //             body: JSON.stringify({
    //                 email,
    //                 password
    //             })
    //         })

    //         const data = await res.json();
    //         console.log(data);

    //         if (res.status === 400 || !data) {
    //             window.alert("Please fill all the fields");
    //             console.log("Pleaes fill all the fields");
    //         } else {
    //             // dispatch({ type: 'USER', payload: true })
    //             window.alert("Login Successfully");
    //             console.log("Login Successfully");
    //             navigate('/blog');
    //         }

    //     } catch (error) {
    //         console.log("Login Error " + error);
    //     }

    // }


    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json();
        console.log(data);

        if (response.status === 400 || !data) {
            window.alert("Please fill all the fields");
            console.log("Pleaes fill all the fields");
        } else {
            dispatch({ type: 'USER', payload: true })
            window.alert("Login Successfully");
            console.log("Login Successfully");
            navigate('/');
        }
    }

    const doctorLogin = () => {
        navigate('/adminLogin');
    }

    return (
        <div className="login_parent">
            <div className="login_div">
                <div className="input_login_div">
                    <h1>Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin}>Patient Login</Button>

                    <h5>Or</h5>
                    <p>
                        If you don't have account
                        <NavLink className="nav_link" href="register">
                            Register Here
                        </NavLink>
                    </p>
                    <hr></hr>
                    <Button onClick={doctorLogin}>Doctor Login</Button>
                </div>
                <div className="img_login_div">
                    <img src={LoginImage} alt="login img" />
                </div>

            </div>
        </div>
    );
};

export default Login;
