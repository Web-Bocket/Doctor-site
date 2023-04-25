import React from 'react';
import './contact.css';

const Contact = () => {





  return (
    <div className='parent_contact'>
      <div className='text_contact'>
        <h1>CONTACT DETAILS</h1>
        <div className='contact_number_div'>
          <p>Dr. Anubha's Homeopathy Clinic, H.No: 10-3-505, Vijayanagar Colony, Lane beside Andhra Bank, Masabtank, Hyderabad - 500057.</p>
          <div className='link_div'>
            <p><i className="fas fa-phone"></i> +91-88017 09712</p>
            <p><i className="fab fa-whatsapp"></i> +91-91778 71574</p>
            <p><i className="fas fa-envelope"></i> info@dranubha.com</p>
          </div>
        </div>

      </div>
      <div className='map_contact'>
        <h1>OUR LOCATION</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="200" frameborder="0" ></iframe>
      </div>
    </div>
  )
}

export default Contact