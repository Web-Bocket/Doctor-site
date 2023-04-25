import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './navbar.css';
import MyVerticallyCenteredModal from './components/model';


function BasicExample() {

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <Navbar className='navbar-parent' style={{ padding: "20px" }} bg="danger" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ fontWeight: "bold" }} href="/">Medical Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{ fontWeight: "bold" }} href="/">Home</Nav.Link>
                        <Nav.Link style={{ fontWeight: "bold" }} href="/about">About</Nav.Link>
                        <NavDropdown style={{ fontWeight: "bold" }} title="Treatments" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Diabetes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Thyroid</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Woman's Health</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Arthritis</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Infertility</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Sinusitis</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Hypertension</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Skin</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hair Loss</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Allergy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Asthma</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Migraine</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Spondylitis</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Children Diseases</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown style={{ fontWeight: "bold", color: "white" }} title="Online Consultation">
                            <NavDropdown.Item href="/form">Online Consultation Form Details</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.1">Online Consultation - INDIA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Online Consultation - CANADA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Online Consultation - USA</NavDropdown.Item> */}
                        </NavDropdown>
                        <NavDropdown style={{ fontWeight: "bold" }} title="Gallery" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Media</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Testimonials</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Videos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={{ fontWeight: "bold" }} href="/blog">Blog</Nav.Link>
                        <Nav.Link style={{ fontWeight: "bold" }} href="/enquiry">Inquiry</Nav.Link>
                        <Nav.Link style={{ fontWeight: "bold" }} href="/contact">Contact us</Nav.Link>
                        <Button style={{ backgroundColor: "white", marginLeft: "10px", fontWeight: "bold", color: "red", border: "2px solid white" }} onClick={() => setModalShow(true)}>Book Appointment</Button>


                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default BasicExample;