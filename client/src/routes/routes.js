import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Navbar from "../partials/Navbar/navbar";
import Footer from "../partials/Footer/footer";
import About from "../pages/About/About";
import Gallery from '../pages/Gallery/Gallery';
import Enquiry from '../pages/Enquiry/Enquiry';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Form from "../pages/Forms/Form";
import React from 'react'

const routes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/enquiry" element={<Enquiry />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/form" element={<Form />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default routes;
