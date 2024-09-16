import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard text-center py-5">
      <h2>Welcome user-56789</h2>
      <div className="dashboard-options">
        <Link to="/book-appointment" className="dashboard-box">Book Appointment</Link>
        <Link to="/medical-records" className="dashboard-box">View Medical Records</Link>
        <Link to="/telemedicine" className="dashboard-box">Telemedicine Consultation</Link>
      </div>
    </div>
  );
};

export default Dashboard;
