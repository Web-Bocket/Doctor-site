/* This is new color combination 
1. #1B1464
2. #0077b6
3. #00b4d8
4. #caf0f8 */


import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/medical_one.jpg'
import image2 from '../../../assets/medical_two.jpg'
import image3 from '../../../assets/medical_three.jpg'
import image4 from '../../../assets/medical_four.jpg';
import image5 from '../../../assets/medical_five.jpg';
import image6 from '../../../assets/medical_six.jpg';
import woman from '../../../assets/woman_one.jpg';
import womanTwo from '../../../assets/woman_two.jpg';
import doctor from '../../../assets/doctor_one.jpg';
import child from '../../../assets/child_one.jpg';
import greenDoctor from '../../../assets/green_doctor.jpg';

import carOne from '../../../assets/canva_car/car_one.png';
import carTwo from '../../../assets/canva_car/1.png';
import carThree from '../../../assets/canva_car/2.png';
import carFour from '../../../assets/canva_car/3.png';
import carFive from '../../../assets/canva_car/4.png';

import '../home.css';

const Casroul = () => {
    return (
        <Carousel className='carosusel_parent'>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={carThree}
                        alt="First slide"
                    />
                    {/* <div style={{ position: 'absolute', color: "white", top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_two'>
                            <h4>BRING SMILE</h4>
                            <h2>THROUGH HOMEOPATHY</h2>
                        </div>

                    </div> */}
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={carFour}
                        alt="First slide"
                    />
                    {/* <div style={{ position: 'absolute', color: "white", top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_three'>
                            <h4>BRING SMILE</h4>
                            <h2>THROUGH HOMEOPATHY</h2>
                        </div>

                    </div> */}
                </div>
            </Carousel.Item>


            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={carTwo}

                        alt="First slide"
                    />
                    {/* <div style={{ position: 'absolute', color: "white", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_four'>
                            <h1>Healthy is Wealthy</h1>
                            <p>Stay Healthy and focus on your children. Do good work and eat good food.</p>
                        </div>
                    </div> */}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={carFive}
                        alt="First slide"
                    />
                    {/* <div style={{ position: 'absolute', color: "white", top: '50%', left: '70%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_five'>
                            <h4>Bring Smile in Woman</h4>
                            <h2>THROUGH HOMEOPATHY</h2>
                        </div>

                    </div> */}
                </div>
            </Carousel.Item>

        </Carousel>

    )
}

export default Casroul