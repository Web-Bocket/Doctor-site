import Button from 'react-bootstrap/esm/Button';
import React, { useState, useContext } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import MyVerticallyCenteredModal from './components/model';
import { UserContext } from '../../App';

function BasicExample() {
    const { state } = useContext(UserContext);
    const [modalShow, setModalShow] = React.useState(false);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
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
                        <NavLink to="/logout"><Button className='nav-link'>Logout</Button></NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/" >Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" >About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Online Consultation</NavLink>
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
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <NavLink className="nav-link" to="/login" >Blog</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" >Inquiry</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" >Contact us</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/login"><Button className='nav-link' >Book Appointment</Button></NavLink>
                    </li>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)} />

                    <li className="nav-item">
                        <NavLink to="/login"><Button className='nav-link'>Login</Button></NavLink>
                    </li>

                </>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" style={{ color: "white", fontWeight: "bold" }} href="/">Medical Website</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <RenderMenu></RenderMenu>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default BasicExample;





