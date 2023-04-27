import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/medical_one.jpg'
import image2 from '../../../assets/medical_two.jpg'
import image3 from '../../../assets/medical_three.jpg'
import image4 from '../../../assets/medical_four.jpg';
import image5 from '../../../assets/medical_five.jpg';
import image6 from '../../../assets/medical_six.jpg';

import '../home.css';

const Casroul = () => {
    return (
        <Carousel className='carosusel_parent' fade>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_one'>
                            <h1>Healthy is Wealthy</h1>
                            <p>Stay Healthy and focus on your children. Do good work and eat good food.</p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={image2}

                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '40%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_two'>
                            <h4>Bring Smile in Woman</h4>
                            <h2>through Homeopathy</h2>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={image3}

                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_three'>
                            <h2>Healthy for happier life through Homeopahty</h2>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={image4}

                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_one'>
                            <h1>Healthy is Wealthy</h1>
                            <p>Stay Healthy and focus on your children. Do good work and eat good food.</p>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={image5}

                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '40%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div className='text_div_carosusel_five'>
                        <h4>Bring Smile in Woman</h4>
                            <h2>through Homeopathy</h2>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block carosusel_img w-100"
                        src={image6}

                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                    <div className='text_div_carosusel_six'>
                            <h1>Healthy is Wealthy</h1>
                            <p>Stay Healthy and focus on your children. Do good work and eat good food.</p>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

    )
}

export default Casroul