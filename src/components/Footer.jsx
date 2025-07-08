import React from 'react';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-glow">© {year} logesh.dev — All Rights Reserved</p>
        
      </div>
    </footer>
  );
};

export default Footer;
