import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

const Header = () =>   {
  return (

    <header>

      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Logo</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/sponsor">Sponsor</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/patients">Patient</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/providers">Providers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/SignIn">SignIn</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Register">Register</NavLink></li>
          </ul>
          

      </div>
    </nav>
    
    </header>
    
  );
};

export default Header;
