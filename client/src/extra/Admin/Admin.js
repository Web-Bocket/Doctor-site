import React, { useState, useEffect } from 'react';
import './admin.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Admin = () => {
    const [appointments, setAppointments] = useState([]);
    const [consultations, setConsultation] = useState([]);
    const [enquirys, setEnquiryData] = useState([]);
    const [blogs, setBlogData] = useState([]);
    

    // This is for the Blog Post
    const [blogTitle, setBlogTitle] = useState("");
    const [blogPerson, setBlogPerson] = useState("");
    const [blogImage, setBlogImage] = useState("");
    const [blogDescription, setBlogDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/appointment')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.log('Error fetching appointments:', error);
            });
        // }, []);


        // useEffect(() => {
        axios.get('http://localhost:5000/consultation')
            .then(response => {
                setConsultation(response.data);
            })
            .catch(error => {
                console.log('Error fetching Consultation:', error);
            });
        // }, []);


        // useEffect(() => {
        axios.get('http://localhost:5000/enquiry')
            .then(response => {
                setEnquiryData(response.data);
            })
            .catch(error => {
                console.log('Error fetching Enquiry Data:', error);
            });
        // }, []);


        // useEffect(() => {
        axios.get('http://localhost:5000/blog')
            .then(response => {
                setBlogData(response.data);
            })
            .catch(error => {
                console.log('Error fetching blog Data:', error);
            });
    }, []);


    const handleSubmitBlog = () => {

        if (!blogPerson || !blogDescription || !blogTitle) {
            window.alert("Please fill in all required fields.");
            return;
        }

        const urlPattern = /^(http|https):\/\/[^ "]+$/;

        // Check if apiUrl matches urlPattern
        if (!urlPattern.test(blogImage)) {
            window.alert("Invalid Image url");
            console.log("Invalid URL format");
            return;
        }

        axios.post("http://localhost:5000/blog", {
            blogPerson,
            blogTitle,
            blogDescription,
            blogImage
        }).then(() => {
            console.log("Blog Saved Successfully");
            window.alert("Blog Saved Successfully");
        }).catch((error) => {
            console.log("This is the Blog Post Error " + error);
        })
    }


    const deleteBlog = async (blogId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/blog/${blogId}`);
            console.log(response);
            window.alert("Blog Deleted Successfully");
        } catch (error) {
            console.log("Error while deleting the blog " + error);
        }
    }


    const deleteConsultation = async (ConsultationId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/consultation/${ConsultationId}`);
            console.log(response);
            window.alert("Consultation Data Deleted Successfully");
        } catch (error) {
            console.log("Error while deleting the Consultation Data" + error);
        }
    }


    const deleteAppointment = async (appointmentId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/appointment/${appointmentId}`);
            console.log(response);
            window.alert("Appointment Data Deleted Successfully");
        } catch (error) {
            console.log("Error while deleting the Appointment Data" + error);
        }
    }

    const deleteEnquiry = async (enquiryId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/enquiry/${enquiryId}`);
            console.log(response);
            window.alert("Enquiry Data Deleted Successfully");
        } catch (error) {
            console.log("Error while deleting the Enquiry Data" + error);
        }
    }

    return (
        <div className='tab_parent'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col className='right_tab' sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {/* <Nav.Item>
                                <Nav.Link className='nav_link_tab' eventKey="first">Dashboard</Nav.Link>
                            </Nav.Item> */}
                            <Nav.Item>
                                <Nav.Link eventKey="first">Enquiry</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Appointment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Consultation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Blogs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth">Blog Post</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className='left_tab' sm={9}>
                        <Tab.Content>
                            {/* <Tab.Pane eventKey="first">
                                <p>This is the Tab One</p>
                            </Tab.Pane> */}
                            <Tab.Pane eventKey="first">
                                <div>
                                    {enquirys.map(enquiry => (
                                        <div className='appointment_one_data' key={enquiry._id}>
                                            <p>Name : {enquiry.yourName}</p>
                                            <p>Phone : {enquiry.phone}</p>
                                            <p>Email : {enquiry.email}</p>
                                            <p>Problem : {enquiry.problem}</p>
                                            <Button onClick={() => deleteEnquiry(enquiry._id)}>Delete Enquiry Data</Button>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div>
                                    {appointments.map(appointment => (
                                        <div className='appointment_one_data' key={appointment._id}>
                                            <p>Name: {appointment.name}</p>
                                            <p>Email: {appointment.email}</p>
                                            <p>City: {appointment.city}</p>
                                            <p>Date: {appointment.date}</p>
                                            <p>Phone: {appointment.phone}</p>
                                            <p>Gender: {appointment.gender}</p>
                                            <p>Status: {appointment.patientStatus}</p>
                                            <p>Message: {appointment.message}</p>
                                            <Button onClick={() => deleteAppointment(appointment._id)}>Delete Appointment Data</Button>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <div>
                                    {consultations.map(consultation => (
                                        <div className='appointment_one_data' key={consultation._id}>
                                            <p>First Name : {consultation.firstName}</p>
                                            <p>Last Name : {consultation.lastName}</p>
                                            <p>Email : {consultation.email}</p>
                                            <p>Phone : {consultation.phone}</p>
                                            <p>Gender : {consultation.gender}</p>
                                            <p>Age : {consultation.age}</p>
                                            <p>Address: {consultation.address}</p>
                                            <p>City : {consultation.city}</p>
                                            <p>State : {consultation.state}</p>
                                            <p>Country : {consultation.country}</p>
                                            <p>Problem : {consultation.problem}</p>
                                            <Button onClick={() => deleteConsultation(consultation._id)}>Delete Consultation Data</Button>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <div>
                                    {blogs.map(blog => (
                                        <div className='appointment_one_data' key={blog._id}>
                                            <p>Title : {blog.blogTitle}</p>
                                            <img src={blog.blogImage} alt="blog img" />
                                            {/* <p>Image Url : {blog.blogImage}</p> */}
                                            <p>Person by : {blog.blogPerson}</p>
                                            <p>Description : {blog.blogDescription}</p>
                                            <Button onClick={() => deleteBlog(blog._id)}>Delete Blog</Button>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                <div className='blog_post_div'>
                                    <h3>Blog Post</h3>
                                    <div className='blog_input_div'>
                                        <input type='text' onChange={(e) => setBlogTitle(e.target.value)} placeholder='Blog Title' />
                                        <input type='text' onChange={(e) => setBlogImage(e.target.value)} placeholder='Enter the Image url' />
                                        <input type='text' onChange={(e) => setBlogPerson(e.target.value)} placeholder='Blog by' />
                                        <textarea rows="5" onChange={(e) => setBlogDescription(e.target.value)} typeof='text' placeholder='Blog Description' />
                                        <Button onClick={handleSubmitBlog}>Post Blog</Button>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Admin;
