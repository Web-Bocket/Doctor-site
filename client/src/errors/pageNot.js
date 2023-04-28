import React from 'react';
import { NavLink } from 'react-router-dom';
import './pageNot.css';


const pageNot = () => {
  return (
    <div className='error_parent'>
      <div className='error_div'>

        <h1>404</h1>
        <h3>PAGE NOT FOUND</h3>
        <p>Sorry, the page you're looking doesn't exist. Please go back to home.</p>

        <div>
          <button><NavLink to="/">GO HOME</NavLink></button>
          <button><NavLink to="/contact">CONTACT US</NavLink></button>
        </div>

      </div>
    </div>
  )
}

export default pageNot