// import React, { useState } from 'react';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function MyVerticallyCenteredModal(props) {
//     const [name, setYourName] = useState("");
//     const [city, setYourCity] = useState("");
//     const [email, setYourEmail] = useState("");
//     const [date, setDate] = useState("");
//     const [phone, setYourPhone] = useState("");
//     const [message, setMessage] = useState("");
//     const [patientStatus, setPatientStatus] = useState("");
//     const [mode, setMode] = useState("");
//     const [gender, setGender] = useState("");

//     const handleClearFields = () => {
//         setYourName("");
//         setYourCity("");
//         setYourEmail("");
//         setDate("");
//         setYourPhone("");
//         setMessage("");
//         setPatientStatus("");
//         setMode("");
//         setGender("");
//     };


//     const handleSubmit = () => {
//         // Check if all required fields are filled
//         if (!name || !city || !email || !date || !phone || !message || !patientStatus || !mode || !gender) {
//             // window.alert("Please fill in all required fields.");

//             toast.info('Please fill all the fields', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });

//             return;
//         }

//         // Check if email address is valid
//         const emailPattern = /\S+@\S+\.\S+/;
//         if (!emailPattern.test(email)) {
//             // window.alert("Please enter a valid email address.");

//             toast.info('Please enter a valid email address', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });

//             return;
//         }

//         const phoneValidatoin = /^\d{10}$/;
//         if (!phoneValidatoin.test(phone)) {
//             // window.alert("Please enter the correct phone number");

//             toast.info('Please enter the correct phone number without +91', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//             return;
//         }

//         axios.post("http://localhost:5000/appointment", {
//             name,
//             city,
//             email,
//             date,
//             phone,
//             message,
//             patientStatus,
//             mode,
//             gender,
//         }).then(() => {
//             handleClearFields();
//             toast.success('Appointment Booked Successfully', {
//                 position: "top-center",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//             console.log("Appointment Book Successfully");
//         }).catch((err) => {
//             toast.error('Login First', {
//                 position: "top-center",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//             console.log("Error Occured " + err.message);
//         })
//     }

//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered>
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Book Appointment
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body className='model_body'>
//                 <input required value={name} onChange={(e) => setYourName(e.target.value)} placeholder='Your Name *' />
//                 <input required value={city} onChange={(e) => setYourCity(e.target.value)} placeholder="Your City" />
//                 <input required value={email} onChange={(e) => setYourEmail(e.target.value)} placeholder='Your Email *' />
//                 <input required value={date} onChange={(e) => setDate(e.target.value)} type='date' />
//                 <input required value={phone} onChange={(e) => setYourPhone(e.target.value)} placeholder='Your-Phone No' />
//                 {/* <input required value={selectDoctor} onChange={(e) => setSelectDoctor(e.target.value)} placeholder='Enter Doctor name' /> */}
//                 <label className='input_radio'>
//                     Select Patient Type:
//                     <select required value={patientStatus} onChange={(e) => setPatientStatus(e.target.value)}>
//                         <option value="">Select patient type</option>
//                         <option value="Old">Old</option>
//                         <option value="New">New</option>
//                     </select>
//                 </label>

//                 <label className='input_radio'>
//                     Select Mode:
//                     <select required value={mode} onChange={(e) => setMode(e.target.value)}>
//                         <option value="">Select Appointment Mode</option>
//                         <option value="Old">Online</option>
//                         <option value="New">Offline</option>
//                     </select>
//                 </label>

//                 <label className='input_radio'>
//                     Select Gender:
//                     <select required value={gender} onChange={(e) => setGender(e.target.value)}>
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                     </select>
//                 </label>

//                 <textarea value={message} required className='navbar_textarea' onChange={(e) => setMessage(e.target.value)} rows="4" placeholder='Your Message' />
//                 <Button onClick={handleSubmit}>Send</Button>
//             </Modal.Body>
//             <ToastContainer />
//         </Modal>
//     );


// }
// export default MyVerticallyCenteredModal;


import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyVerticallyCenteredModal(props) {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    date: "",
    phone: "",
    message: "",
    patientStatus: "",
    mode: "",
    gender: ""
  });

  const { name, city, email, date, phone, message, patientStatus, mode, gender } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClearFields = () => {
    setFormData({
      name: "",
      city: "",
      email: "",
      date: "",
      phone: "",
      message: "",
      patientStatus: "",
      mode: "",
      gender: ""
    });
  };

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (!name || !city || !email || !date || !phone || !message || !patientStatus || !mode || !gender) {
      toast.info('Please fill all the fields', { theme: "dark" });
      return;
    }

    // Check if email address is valid
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      toast.info('Please enter a valid email address', { theme: "dark" });
      return;
    }

    const phoneValidation = /^\d{10}$/;
    if (!phoneValidation.test(phone)) {
      toast.info('Please enter the correct phone number without +91', { theme: "dark" });
      return;
    }

    axios
      .post("http://localhost:5000/appointment", formData, { withCredentials: true })
      .then(() => {
        handleClearFields();
        toast.success('Appointment Booked Successfully', { theme: "dark" });
        console.log("Appointment Booked Successfully");
      })
      .catch((err) => {
        toast.error('Login First', { theme: "dark" });
        console.log("Error Occurred: " + err.message);
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="model_body">
        {/* Rest of the code remains the same */}

        <input
          required
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Your Name *"
        />
        <input
          required
          name="city"
          value={city}
          onChange={handleChange}
          placeholder="Your City"
        />
        <input
          required
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your Email *"
        />
        <input
          required
          name="date"
          value={date}
          onChange={handleChange}
          type="date"
        />
        <input
          required
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Your-Phone No"
        />
        <label className="input_radio">
          Select Patient Type:
          <select
            required
            name="patientStatus"
            value={patientStatus}
            onChange={handleChange}
          >
            <option value="">Select patient type</option>
            <option value="Old">Old</option>
            <option value="New">New</option>
          </select>
        </label>

        <label className="input_radio">
          Select Mode:
          <select required name="mode" value={mode} onChange={handleChange}>
            <option value="">Select Appointment Mode</option>
            <option value="Old">Online</option>
            <option value="New">Offline</option>
          </select>
        </label>

        <label className="input_radio">
          Select Gender:
          <select required name="gender" value={gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <textarea
          value={message}
          required
          name="message"
          className="navbar_textarea"
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
        />
        <Button onClick={handleSubmit}>Send</Button>
      </Modal.Body>
      <ToastContainer />
    </Modal>
  );
}

export default MyVerticallyCenteredModal;



