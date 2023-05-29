import Button from 'react-bootstrap/esm/Button';
import React, { useContext } from 'react';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import MyVerticallyCenteredModal from './components/model';
import { Context } from '../../index';
import axios from 'axios';

import doctorLogo from '../../assets/bg_doc.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function BasicExample() {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);


    const logoutHandler = async () => {
        try {
            await axios.get(`http://localhost:5000/logout`, {
                withCredentials: true,
            });
            setIsAuthenticated(false);

            toast.info('Logout Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            navigate('/');
            return;

        } catch (error) {
            setIsAuthenticated(true);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to="/" style={{ objectFit: "contain", width: "100px" }} href="/"><img src={doctorLogo} /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/" >Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" >About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/form" >Online Consultation</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Treatments
                            </a>
                            <ul className="dropdown-menu">

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/diabetes" >Diabetes</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/thyroid" >Thyroid</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/woman" >Woman's Health</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/arthritits" >Arthritis</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/infertility" >Infertility</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/sinusitis" >Sinusitis</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/hypertension" >Hypertension</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/skin" >Skin</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/hair" >Hair Loss</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/allergy" >Allergy</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/asthma" >Asthma</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/migraine" >Migraine</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/spondylitis" >Spondylitis</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/children" >Children</NavLink>
                                </li>

                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gallery
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/gallery" >Media</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link-down" to="/video" >Videos</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog" >Blog</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/enquiry" >Inquiry</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" >Contact us</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink><Button className='nav-link' onClick={() => setModalShow(true)}>Book Appointment</Button></NavLink>
                        </li>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)} />

                        <li className="nav-item">
                            <NavLink to='/recept'><Button className='nav-link'>Download Recept</Button></NavLink>
                        </li>


                        {
                            isAuthenticated ? (
                                <li className="nav-item">
                                    <NavLink><Button onClick={logoutHandler} className='nav-link'>Logout</Button></NavLink>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <NavLink to="/login"><Button className='nav-link'>Login</Button></NavLink>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
            <ToastContainer />
        </nav >
    );
}

export default BasicExample;





