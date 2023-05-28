import React from 'react'
import './About.css';
import doc_one from '../../assets/doc/doc_nine.jpg';
import doc_two from '../../assets/doc/doc_twelve.jpg';


const About = () => {
  return (
    <div className='parent_about'>
      <div className='parent_about_div'>

        <div className='parent_text'>
          <h1>About us</h1>
          <p>Dr Anubha’s Homeopathy clinic can be accessed from USA, UK, Canada, Australia, Germany, UAE, Pakistan, India and worldwide though it is based in Hyderabad. Using modern online technology, from the convenience of your home, you can visit Dr Anubha’s Online Homeopathic Clinic. This Homeo Care Clinic is a solution for all your health issues under one roof. This is the best place if you are seeking treatment for any diseases. This Homeo Clinic provides a remedy for all ailment. Without exception, it emphasises on the well-being of the sick person and hence, it is undoubtedly one of the unrivalled Homeopathy Clinic in Hyderabad. </p>
        </div>
        <div className='parent_img'>
          <img src={doc_one} alt='doctor img' />
        </div>

      </div>

      <div className='parent_about_div'>

        <div className='parent_img'>
          <img src={doc_two} alt='doctor img' />
        </div>

        <div className='parent_text'>
          <h1>Our Hospital</h1>
          <p>Dr Anubha’s Homeopathy clinic can be accessed from USA, UK, Canada, Australia, Germany, UAE, Pakistan, India and worldwide though it is based in Hyderabad. Using modern online technology, from the convenience of your home, you can visit Dr Anubha’s Online Homeopathic Clinic. This Homeo Care Clinic is a solution for all your health issues under one roof. This is the best place if you are seeking treatment for any diseases. This Homeo Clinic provides a remedy for all ailment. Without exception, it emphasises on the well-being of the sick person and hence, it is undoubtedly one of the unrivalled Homeopathy Clinic in Hyderabad. </p>

        </div>
      </div>
    </div>
  );
};

export default About;