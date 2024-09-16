import React from 'react';
import '../css/style.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container"> 
        <div className="social-icons">
          <a href="https://instagram.com" className="mx-2">Instagram</a>
          <a href="https://twitter.com" className="mx-2">X</a>
          <a href="https://facebook.com" className="mx-2">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
