import React from 'react';

const appointments = [
  { id: 1, doctor: 'Dr. Smith', date: '2024-10-01', time: '10:00 AM' },
  { id: 2, doctor: 'Dr. Johnson', date: '2024-10-05', time: '02:00 PM' }
];

const UpcomingAppointments = () => {
  return (
    <div>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.date} with {appointment.doctor} at {appointment.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming appointments</p>
      )}
    </div>
  );
};

export default UpcomingAppointments;
