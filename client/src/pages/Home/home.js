import React from 'react'
import Casroul from './components/Casroul.js';
import Accordion from './components/Accordion.js';
import './home.css';
import { Button } from '@chakra-ui/react';
import TestimonialSection from './components/Testimonial.js';


const home = () => {
  return (
    <div className='home'>
      <Casroul />


      <div className='parent_home'>



        <div className='homeopathy_text'>
          <h4>Homeopathy is a system of natural medicine based upon the ancient principle of "like cures like."</h4>
        </div>


        <div className='text_medicine'>
          <div className='text_medicine_text'>
            <h1>TOP HOMEOPATHY CLINIC ONLINE</h1>
            <p>Dr Anubha’s Homeopathy clinic can be accessed from USA, UK, Canada, Australia, Germany, UAE, Pakistan, India and worldwide though it is based in Hyderabad. Using modern online technology, from the convenience of your home, you can visit Dr Anubha’s Online Homeopathic Clinic. This Homeo Care Clinic is a solution for all your health issues under one roof. This is the best place if you are seeking treatment for any diseases. This Homeo Clinic provides a remedy for all ailment. Without exception, it emphasises on the well-being of the sick person and hence, it is undoubtedly one of the unrivalled Homeopathy Clinic in Hyderabad. </p>


          </div>
          <div className='text_medicine_img'>
            <img src='https://www.dranubha.com/wp-content/uploads/2017/03/Homeopathy1.png' alt='medicine img' />
          </div>
        </div>

      </div>


      <div className='card_center_two'>
        <div className='card_center_two_text'>


          <div>
            <h1>What is Homeopathy</h1>
            <p>It is believed that homeopathy treatment is slow. But in many diseases like diarrhea, minor infection, and fever it acts faster than other treatments. In chronic diseases like diabetes, blood pressure, etc, homeopathy</p>
            <Button>Read More</Button>
          </div>

          <div>
            <h1>What is Homeopathy</h1>
            <p>It is believed that homeopathy treatment is slow. But in many diseases like diarrhea, minor infection, and fever it acts faster than other treatments. In chronic diseases like diabetes, blood pressure, etc, homeopathy</p>
            <Button>Read More</Button>
          </div>


          <div>
            <h1>What is Homeopathy</h1>
            <p>It is believed that homeopathy treatment is slow. But in many diseases like diarrhea, minor infection, and fever it acts faster than other treatments. In chronic diseases like diabetes, blood pressure, etc, homeopathy</p>
            <Button>Read More</Button>
          </div>



        </div>

      </div>


      <div className='parent_home_two' >
        <h1>OUR TREATMENT</h1>
        <div className='parent_home_two_child row row-cols-1 row-cols-md-4 g-4'>

          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>


          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>


          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>


          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>


          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>


          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>


          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>


          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>

          <div className='col'>
            <div className='parent_home_two_div'>
              <img src='https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg' alt='deases img' />
              <p>Diabetes</p>
            </div>
          </div>

        </div>
      </div>

      <div className='card_center_four'>
        <div className='card_center_four_text'>

          <h1>COMPLETE HOMEOPATHIC CARE FOR YOUR FAMILY</h1>
          <p>Using Homeopathic Treatments, you and your family can benefit from improved health since homeopathic medicines activate the self-regulatory mechanism of the body that helps you treat all kinds of ailments & diseases. It also strengthens your immunity while optimizing your bodily functioning.</p>
          <p>Homeopathic medicines’ major benefits are that they are natural and made from small amounts of herbs, minerals, and animal ingredients. They can be used by pregnant women, infants, and children without worrying about the dosage.</p>
          <p>Additionally, Homeopathic Medicine is not toxic since they are all-natural and contain amounts of minerals, herbs, and animal products, making them suitable for children and pregnant women.</p>
          <p>Many people have used it to help themselves, their families, and their pets without experiencing harmful physical consequences. There is no toxicity, addiction, dependency, or withdrawal. Millions of people use it safely, without negative effects on their health.</p>

        </div>

      </div>

      <div className='card_center_three'>
        <div className='card_center_three_text'>

          <TestimonialSection />

        </div>

      </div>



      <div className='parent_home_five'>
        <div className='parent_home_five_div'>
          <h1>FAQs</h1>
          <Accordion />
        </div>


      </div>


    </div>
  )
}

export default home