import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import './auth.css';
import NavLink from 'react-bootstrap/esm/NavLink';
import LoginImage from '../../assets/login_two_one.png';
import axios from 'axios';
// import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/login', {
            email,
            password,
        })
            .then(() => {
                console.log('Login Successfully');
                // console.log(response);
                // const token = response.data.token;
                // console.log(token);
                navigate('/');
            })
            .catch((error) => {
                console.log('Problem in the Login ' + error);
                // Display error message to the user
            });
    };

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
                    <Button onClick={handleLogin}>Login</Button>

                    <h5>Or</h5>
                    <p>
                        If you don't have account
                        <NavLink className="nav_link" href="register">
                            Register Here
                        </NavLink>
                    </p>
                </div>
                <div className="img_login_div">
                    <img src={LoginImage} alt="login img" />
                </div>
            </div>
        </div>
    );
};

export default Login;
