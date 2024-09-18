import React from 'react';

const TelemedicineConsultation = () => {
  const handleJoinSession = () => {
    // Add functionality to join the telemedicine session
    console.log('Joining telemedicine session...');
  };

  return (
    <div>
      <button onClick={handleJoinSession}>Join Telemedicine Consultation</button>
    </div>
  );
};

export default TelemedicineConsultation;
