import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">Nawiri Logo</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Sponsor</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/patients">Patient</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/providers">Providers</NavLink></li>
          </ul>
          <div className="navbar-text">
            <NavLink className="nav-link" to="/signin">Sign In</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
