import React from 'react'
import './footer.css';
import { NavLink } from 'react-router-dom';

const footer = () => {
  return (

    <footer className="text-center my-6 p-8 text-gray3">
      <div>

        <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>
        <div className="pt-10">See our latest Blog ? <NavLink className="text-blue-500 navlink_fix" to="/blog">See blogs</NavLink></div>

        <div className="py-3">
          Online Consultation :  <NavLink className="navlink_text" to="/form">Consult Now</NavLink>
        </div>

        <div className="flex justify-center items-center my-2">
          <a href=''><i className="fab fa-youtube"></i></a>
          <a href=''><i className="fab fa-twitter"></i></a>
          <a href=''><i className="fab fa-instagram"></i></a>
          <a href=''><i className="fab fa-facebook"></i></a>
        </div>

        <h6>Helpful Links</h6>

        <div className="py-3 bottom_nav_link">
          <NavLink className="navlink_fix" to="/">Home</NavLink> |
          <NavLink className="navlink_fix" to="/about">About</NavLink> |
          <NavLink className="navlink_fix" to="/contact">Contact</NavLink> |
          <NavLink className="navlink_fix" to="/blog">Blog</NavLink> |
          <NavLink className="navlink_fix" to="/enquiry">Inquiry</NavLink>
        </div>


        <div className="text-xs">
          Copyrights © 2023. All Rights Reserved.
        </div>
      </div>

    </footer>
  )
}

export default footer