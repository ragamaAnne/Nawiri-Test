import React from 'react';
import BookAppointment from '../components/BookAppointment';
import UpcomingAppointments from '../components/UpcomingAppointments';
import TelemedicineConsultation from '../components/TelemedicineConsultation';
import VirtualSession from '../components/VirtualSession';
import MedicalRecords from '../components/MedicalRecords';
import '../css/style.css'; // Optional: for styling
import Header from '../components/Header';


const PatientsPage = () => {
  return (

    

    <div className="patients-page">
    <Header/>
    
      <h1>Patient Dashboard</h1>
      <div className="section">
        <h2>Book Appointment with Doctors</h2>
        <BookAppointment />
      </div>
      <div className="section">
        <h2>View Upcoming Appointments</h2>
        <UpcomingAppointments />
      </div>
      <div className="section">
        <h2>Telemedicine Consultation</h2>
        <TelemedicineConsultation />
      </div>
      <div className="section">
        <h2>Book a Virtual Session</h2>
        <VirtualSession />
      </div>
      <div className="section">
        <h2>View Medical Records</h2>
        <MedicalRecords />
      </div>
    </div>
  );
};

export default PatientsPage;
