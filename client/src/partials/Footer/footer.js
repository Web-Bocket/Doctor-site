import React from 'react'
import './footer.css';
import { NavLink } from 'react-router-dom';

const footer = () => {
  return (
    // <footer>
    //   <div className='footer_parent'>
    //     <div className='upper_footer'>
    //       <div className='footer_about'>
    //         <h3>ABOUT US</h3>
    //         <p>Over 23 years of experience, Dr. Anubha understands and treats patients in a unique way. She has cured many diseases successfully in her Dr. Anubha Homeo Clinic.</p>
    //         <p>Dr. Anubha Homeopathy Clinic is a one and half decade old renowned clinic that offers the best quality, non-toxic and highly effective treatment in Hyderabad.</p>
    //       </div>
    //       <div className='footer_list'>
    //         <h3>HOMEOPATHY TREATMENTS</h3>
    //         <div className='footer_list_item'>
    //           <div>
    //             <li><a>Diabetes</a></li>
    //             <li><a>Diabetes</a></li>
    //             <li><a>Diabetes</a></li>
    //             <li><a>Diabetes</a></li>
    //             <li><a>Diabetes</a></li>
    //             <li><a>Diabetes</a></li>
    //           </div>
    //         </div>




    //       </div>
    //       <div className='footer_contact'>
    //         <h3>CONTACT US</h3>
    //         <p>Dr. Anubha's Homeopathy Clinic, H.No: 10-3-505, Vijayanagar Colony, Lane beside Andhra Bank, Masabtank, Hyderabad - 500057.</p>
    //         <p>+91-88017 09712</p>
    //         <p>+91-88017 09712</p>
    //         <p>+91-88017 09712</p>

    //         <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="200" frameborder="0" ></iframe>
    //       </div>
    //     </div>
    //     <hr></hr>
    //     <div className='bottom_footer'>
    //       <div>
    //         <h3>FOLLOW US</h3>
    //       </div>
    //       <div>
    //         Copyrights © 2023. All Rights Reserved.
    //       </div>
    //       <div>
    //         Disclaimer | Terms and Conditions | NetBanking | Our Team
    //       </div>
    //       <div>
    //         Digital Marketing Agency - ITinfo Digital
    //       </div>
    //     </div>
    //   </div>

    // </footer>


    <footer class="text-center my-6 p-8 text-gray3">

      <div>


        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>
        <div class="pt-10">Find an issue with this page? <a className="text-blue-500 navlink_fix" href="https://github.com/mrprince123/Portfolio_webiste">Fix it on GitHub</a></div>

        <div class="py-3">
          Need help? Email <a className="navlink_text" href="mailto:princekrdss2018@gmail.com">princekrdss2018@gmail.com</a>
        </div>

        <div class="flex justify-center items-center my-2">
          <a href='https://www.youtube.com/@mr.codesigner'><i className="fab fa-youtube"></i></a>
          <a href='https://twitter.com/MrPrince185'><i className="fab fa-twitter"></i></a>
          <a href='https://www.linkedin.com/in/mrprince123/'><i className="fab fa-linkedin"></i></a>
          <a href='https://github.com/mrprince123'><i className="fab fa-github"></i></a>


        </div>

        <h6>Helpful Links</h6>

        <div class="py-3 bottom_nav_link">
          <NavLink className="navlink_fix" to="/">Home</NavLink> |
          <NavLink className="navlink_fix" to="/about">About</NavLink> |
          <NavLink className="navlink_fix" to="/contact">Contact</NavLink> |
          <NavLink className="navlink_fix" to="/blog">Blog</NavLink> |
          <NavLink className="navlink_fix" to="/enquiry">Inquiry</NavLink>
        </div>


        <div class="text-xs">
          Copyrights © 2023. All Rights Reserved.
        </div>
      </div>

      {/* <div>
        <h3>Contact us</h3>
        <p>Dr. Anubha's Homeopathy Clinic, H.No: 10-3-505, Vijayanagar Colony, Lane beside Andhra Bank, Masabtank, Hyderabad - 500057.</p>
        <p><i class="fas fa-phone"></i> +91-88017 09712</p>
        <p><i class="fab fa-whatsapp"></i> +91-91778 71574</p>
        <p><i class="fas fa-envelope"></i> info@dranubha.com</p>
      </div> */}
    </footer>
  )
}

export default footer