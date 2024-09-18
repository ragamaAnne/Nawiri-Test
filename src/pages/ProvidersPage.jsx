import React from 'react';
import '../css/style.css';
import Header from '../components/Header';

const ProvidersPage = () => {
  return (
    <div className="providers-page">

    <Header />
      {/* Efficient Practice Management Section */}
      <section className="practice-management">
        <h2>Efficient Practice Management</h2>
        <ul>
          <li>Appointment Scheduling</li>
          <li>Patient Communication</li>
          <li>Billing</li>
          <li>EMR Management</li>
        </ul>
      </section>

      {/* Patient Engagement Section */}
      <section className="patient-engagement">
        <h2>Patient Engagement</h2>
        <ul>
          <li>Secure Messaging</li>
          <li>Appointment Reminders</li>
          <li>Educational Resources</li>
        </ul>
      </section>

      {/* Data Analytics Section */}
      <section className="data-analytics">
        <h2>Data Analytics</h2>
        <ul>
          <li>Patient Population Insights</li>
          <li>Health Outcomes Tracking</li>
          <li>Quality Improvement Identification</li>
        </ul>
      </section>
    </div>
  );
};

export default ProvidersPage;
