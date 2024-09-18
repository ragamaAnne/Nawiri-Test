import React from 'react';

const VirtualSession = () => {
  const handleBookSession = () => {
    // Add functionality to book a virtual session
    console.log('Booking virtual session...');
  };

  return (
    <div>
      <button onClick={handleBookSession}>Book Virtual Doctor Session</button>
    </div>
  );
};

export default VirtualSession;
