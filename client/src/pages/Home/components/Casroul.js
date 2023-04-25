import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/medical_one.jpg'
import image2 from '../../../assets/medical_two.jpg'
import image3 from '../../../assets/medical_three.jpg'
import image4 from '../../../assets/medical_four.jpg';
import image5 from '../../../assets/medical_five.jpg';
import image6 from '../../../assets/medical_six.jpg';

const Casroul = () => {
    return (
        <Carousel style={{ height: "70vh" }} fade>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        style={{ height: "70vh", objectFit: "cover" }}

                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div style={{ backgroundColor: "red", fontWeight: "600", fontSize: "1.5em", textAlign: "center", padding: "10px" }}>
                            <h2>Health is Wealth, So Stay Healthy in any Situation.</h2>
                            <p>Stay Healthy and focus on your children. Do good work and eat good food.</p>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        style={{ height: "70vh", objectFit: "cover" }}
                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '20%', transform: 'translate(-50%, -20%)' }} className="d-flex flex-column align-items-center">
                        <div style={{ padding: "10px" }}>
                            <h3 style={{ fontSize: "1.5em" }}>Bring Smile in Woman</h3>
                            <h2 style={{ fontSize: "2em" }}>through Homeopathy</h2>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        style={{ height: "70vh", objectFit: "cover" }}
                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div style={{ backgroundColor: "black", padding: "10px" }}>
                            <h2>Healthy for happier life through Homeopahty</h2>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block w-100"
                        src={image4}
                        style={{ height: "70vh", objectFit: "cover" }}
                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div style={{ backgroundColor: "black", padding: "10px" }}>
                            <h2>Healthy for happier life through Homeopahty</h2>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block w-100"
                        src={image5}
                        style={{ height: "70vh", objectFit: "cover" }}
                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '50%', left: '20%', transform: 'translate(-50%, -20%)' }} className="d-flex flex-column align-items-center">
                        <div style={{ padding: "10px" }}>
                            <h3 style={{ fontSize: "1.5em" }}>Bring Smile in Woman</h3>
                            <h2 style={{ fontSize: "2em" }}>through Homeopathy</h2>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative' }}>
                    <img
                        className="d-block w-100"
                        src={image6}
                        style={{ height: "70vh", objectFit: "cover" }}
                        alt="First slide"
                    />
                    <div style={{ position: 'absolute', color: "white", top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }} className="d-flex flex-column align-items-center">
                        <div style={{ backgroundColor: "black", padding: "10px" }}>
                            <h2>Healthy for happier life through Homeopahty</h2>
                        </div>

                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

    )
}

export default Casroul