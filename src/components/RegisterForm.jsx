import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="row">
        <div className="col-md-6">
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterForm;
