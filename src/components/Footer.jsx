import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <ul>
            <li>The Shoppes at Infinity, Brgy. Pulung Maragul, Angeles City, Philippines</li>
            <li>Email: gabschickeninasal@gmail.com</li>
            <li>Phone: 0966 163 7748</li>
          </ul>
        </div>
        <div className="footer-section follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/Gabs.ChickenInasal" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/gabs.chickeninasal/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Gabs Chicken Inasal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
