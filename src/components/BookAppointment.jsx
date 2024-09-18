import React, { useState } from 'react';

const BookAppointment = () => {
  const [appointment, setAppointment] = useState({
    doctor: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to submit the appointment
    console.log('Appointment booked:', appointment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Doctor:
        <select name="doctor" onChange={handleChange}>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Johnson">Dr. Johnson</option>
        </select>
      </label>
      <label>
        Select Date:
        <input type="date" name="date" onChange={handleChange} />
      </label>
      <label>
        Select Time:
        <input type="time" name="time" onChange={handleChange} />
      </label>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookAppointment;
