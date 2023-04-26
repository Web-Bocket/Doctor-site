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
        <Navbar  className='navbar-parent' style={{ padding: "20px" }} bg="danger" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ fontWeight: "bold" }} href="/">Medical Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{ fontWeight: "bold" }} href="/">Home</Nav.Link>
                        <Nav.Link style={{ fontWeight: "bold" }} href="/about">About</Nav.Link>
                        <NavDropdown style={{ fontWeight: "bold" }} title="Treatments" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/diabetes">Diabetes</NavDropdown.Item>
                            <NavDropdown.Item href="/thyroid">Thyroid</NavDropdown.Item>
                            <NavDropdown.Item href="/women">Woman's Health</NavDropdown.Item>
                            <NavDropdown.Item href="/arthritits">Arthritis</NavDropdown.Item>
                            <NavDropdown.Item href="/infertility">Infertility</NavDropdown.Item>
                            <NavDropdown.Item href="/sinusitis">Sinusitis</NavDropdown.Item>
                            <NavDropdown.Item href="/hypertension">Hypertension</NavDropdown.Item>
                            <NavDropdown.Item href="/skin">Skin</NavDropdown.Item>
                            <NavDropdown.Item href="/hair">Hair Loss</NavDropdown.Item>
                            <NavDropdown.Item href="/allergy">Allergy</NavDropdown.Item>
                            <NavDropdown.Item href="/asthma">Asthma</NavDropdown.Item>
                            <NavDropdown.Item href="/migraine">Migraine</NavDropdown.Item>
                            <NavDropdown.Item href="/spondylitis">Spondylitis</NavDropdown.Item>
                            <NavDropdown.Item href="/children">Children Diseases</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown style={{ fontWeight: "bold", color: "white" }} title="Online Consultation">
                            <NavDropdown.Item href="/form">Online Consultation Form Details</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown style={{ fontWeight: "bold" }} title="Gallery" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/gallery">Media</NavDropdown.Item>
                            <NavDropdown.Item href="/video">Videos</NavDropdown.Item>
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
