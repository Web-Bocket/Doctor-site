import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Navbar from "../partials/Navbar/navbar";
import Footer from "../partials/Footer/footer";
import About from "../pages/About/About";
import Gallery from '../pages/Gallery/Gallery';
import Video from "../pages/Gallery/Video";
import Enquiry from '../pages/Enquiry/Enquiry';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Form from "../pages/Forms/Form";
import React from 'react'

import Diabetes from "../pages/Treatments/components/Diabetes";
import Thyroid from '../pages/Treatments/components/Thyroid';
import Women from '../pages/Treatments/components/Women';
import Arthritits from '../pages/Treatments/components/Arthritis';
import Infertility from '../pages/Treatments/components/Infertility';
import Sinusitis from '../pages/Treatments/components/sinusitis';
import Hypertension from '../pages/Treatments/components/hypertension';
import Skin from "../pages/Treatments/components/skin";
import Hair from '../pages/Treatments/components/Hair';
import Allergy from "../pages/Treatments/components/Allergy";
import Asthma from '../pages/Treatments/components/Asthma';
import Migraine from '../pages/Treatments/components/Migraine';
import Spondylitis from '../pages/Treatments/components/Spondylitis';
import Children from '../pages/Treatments/components/children';
import BlogData from "../pages/Blog/BlogData";

import Admin from "../extra/Admin/Admin";

import PageNot from "../errors/pageNot";
import Thanks from "../extra/Thanks/Thanks";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import AdminLogin from "../pages/Auth/AdminLogin";
import Logout from "../pages/Auth/Logout";

import Recept from '../extra/Recept/recept';

import Payment from '../payment/Payment';

const routes = () => {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/video" element={<Video />} />
                <Route path="/enquiry" element={<Enquiry />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/form" element={<Form />} />

                <Route path="/blog/:id" element={<BlogData />} />

                <Route path="/diabetes" element={<Diabetes />} />
                <Route path="/thyroid" element={<Thyroid />} />
                <Route path="/women" element={<Women />} />
                <Route path="/arthritits" element={<Arthritits />} />
                <Route path="/infertility" element={<Infertility />} />
                <Route path="/sinusitis" element={<Sinusitis />} />
                <Route path="/hypertension" element={<Hypertension />} />
                <Route path="/skin" element={<Skin />} />
                <Route path="/hair" element={<Hair />} />
                <Route path="/allergy" element={<Allergy />} />
                <Route path="/asthma" element={<Asthma />} />
                <Route path="/migraine" element={<Migraine />} />
                <Route path="/spondylitis" element={<Spondylitis />} />
                <Route path="/children" element={<Children />} />

                <Route path="/admin/u=admin123&p=admin123" element={<Admin />} />

                <Route path="/adminLogin" element={<AdminLogin />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />

                <Route path="/thanks" element={<Thanks />} />
                <Route path="/*" element={<PageNot />} />

                <Route path="/recept" element={<Recept/>} />

                <Route path="/payment" element={<Payment /> } />

            </Routes>
            <Footer />
        </Router>

    )
}

export default routes;
