import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import './auth.css';
import NavLink from 'react-bootstrap/esm/NavLink';
import LoginImage from '../../assets/login_two_one.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:5000/login", {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });

            console.log("Login Data " + data.message);
            setIsAuthenticated(true);
            // window.alert("Login Successfully");

            toast.success(data.message, {
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

        } catch (error) {
            window.alert("Login Failed");
            setIsAuthenticated(false);
        }
    }

    if (isAuthenticated) {
        navigate('/');
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
            <ToastContainer />
        </div>
    );
};

export default Login;
