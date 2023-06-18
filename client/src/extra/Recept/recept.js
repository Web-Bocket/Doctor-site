import React, { useEffect, useState } from 'react';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import './recept.css';
import DoctorLogo from '../../assets/doc_icon_logo.png';

const AppointmentPage = () => {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get('http://localhost:5000/appointment', {
          withCredentials : true,
        });
        const appointments = response.data;
        if (appointments.length > 0) {
          const latestAppointment = appointments[appointments.length - 1];
          setAppointment(latestAppointment);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointment();
  }, []);

  const handleDownloadPDF = () => {
    if (appointment) {
      const element = document.querySelector('.recept_data');

      html2pdf()
        .set({
          margin: 0.0,
          filename: 'appointment_receipt.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, dpi: 300 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        })
        .from(element)
        .save();
    }
  };


  const just = () => {
    {
      appointment ? (
        <div>
          <p>Name: {appointment.name}</p>
          <p>Email: {appointment.email}</p>
          {/* Display other appointment details */}
          <hr />
        </div>
      ) : (
        <p>No appointment data available</p>
      )
    }

    {
      appointment && (
        <button onClick={handleDownloadPDF}>Download as PDF</button>
      )
    }
  }

  return (
    <div className='recept'>
      <div className='recept_data'>


        <div className='top_recept'>
          <div className='top_left_recept'>
            <h3>Dr. Bishnu Prasad Sadangi</h3>
            <p>B.H.M.S (Hons), F.C.M. C.C.H (Mumbai)</p>
            <p>LECTURER, DEPARTMENT OF MEDICINE</p>
            <p>Biju Pattnaik Homeopathic Medical</p>
            <p>College & Hospital (Brahampur)</p>
            <span></span>
            <h3>Dr.Munalin Sadangi</h3>
            <p>MEDICAL OFFICER (AYUSH)</p>
          </div>

          <div className='center_recept'>
            <img src={DoctorLogo} />
          </div>


          <div className='top_right_recept'>
            <p>Cell : 94384 30338, 98610 32409</p>
            <p>E-mail : drbishnuprasad@gmail.com</p>
          </div>

        </div>

        <div className='second_recept'>
          <p>Consulting Hours : Brahampur : 9.00 a.m to 1.00 p.m and 5.30 p.m to 9.00 p.m.</p>
          <p>(SUNDAY CLOSED)</p>
        </div>

        <div className='third_body_recept'>
          <div>
            {
              appointment ? (
                <div className='personal_details'>
                  <p>Name: {appointment.name}</p>
                  <p>Email: {appointment.email}</p>
                  <p>City : {appointment.city}</p>
                  <p>Sex : {appointment.gender}</p>
                  {/* Display other appointment details */}
                  <hr />
                </div>
              ) : (
                <p>No appointment data available</p>
              )
            }

          </div>
          <hr className='hr_recept'></hr>


          <p className='third_p'>Consulting Hour : Every 2nd & 4th Sunday : 9.00 a.m. to 2.00 p.m.</p>
        </div>

        <div className='bottom_recept'>
          <h1>ANJEL HOMEO HALL</h1>
          <p>Plot 137/A. Ashok Nagar, Opp. Ashoka Dry Cleaners, Khaniniketan Side Lane</p>
          <p>Bhubaneswar, Pin-7510009, Cell:9778577689, 8763085487</p>
        </div>
        
      </div>

      <div className='recept_download_button'>
        {
          appointment && (
            <button onClick={handleDownloadPDF}>Download as PDF</button>
          )
        }
      </div>

    </div>
  );
};

export default AppointmentPage;
