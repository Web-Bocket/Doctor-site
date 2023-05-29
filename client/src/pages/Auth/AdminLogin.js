import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import './auth.css';
import LoginImage from '../../assets/login_two_one.png';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Context } from '../../index';


const AdminLogin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    // const user = "admin123";
    // const passwordOne = "pass123";

    // if (email == user && password === passwordOne) {
    //   console.log('Login Successfully');
    //   window.alert("Login Successfull");
    //   navigate('/admin/u=admin123&p=admin123');
    // }

    try {
      const { data } = await axios.post("http://localhost:5000/adminLogin", {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });

      setIsAuthenticated(true);

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
      window.alert(error.data);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    navigate('/admin/u=admin123&p=admin123');
  }

  return (
    <div className="login_parent">
      <div className="login_div">
        <div className="input_login_div">
          <h1>Doctor Login</h1>
          <p>Please do not login if you are not a doctor. </p>
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
          <Button onClick={handleAdminLogin}>Login</Button>
        </div>
        <div className="img_login_div">
          <img src={LoginImage} alt="login img" />
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin
