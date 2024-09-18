import React from 'react';
import SubmitClaim from '../components/SubmitClaim';
import ViewClaims from '../components/ViewClaims';
import HospitalServicesChart from '../components/HospitalServicesChart';
import WellnessPrograms from '../components/WellnessPrograms';
import '../css/style.css';
import Header from '../components/Header';

const SponsorPage = () => {
  return (

    

    <div className="sponsor-page">

    <Header />
      <h1>Sponsor Dashboard</h1>

      <div className="section">
        <h2>Submit a Claim</h2>
        <SubmitClaim />
      </div>

      <div className="section">
        <h2>View Submitted Claims</h2>
        <ViewClaims />
      </div>

      <div className="section">
        <h2>Hospital Services Chart</h2>
        <HospitalServicesChart />
      </div>

      <div className="section">
        <h2>Wellness Programs</h2>
        <WellnessPrograms />
      </div>
    </div>
  );
};

export default SponsorPage;
