import React from 'react';
import './Thanks.css';
import Button from 'react-bootstrap/esm/Button';
import tick from '../../assets/tick_now_one.png';
import { NavLink } from 'react-router-dom';

const FormThanks = () => {
  return (
    <div className='thanks_parent'>
      <div className='thanks_div'>
        <img src={tick} alt='thanks img' />
        <h1>Thanks for Consulting with use.</h1>
        <p>Our Team will contact you soon</p>
        <Button><NavLink to="/">Go Home</NavLink></Button>
      </div>
    </div>
  )
}

export default FormThanks