import React from 'react';
import './Footer.css'; // Make sure to link your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="logo.png" alt="Logo" />
          <p>(Gab's Chicken Information --- Pa edit nalang ng want niyo here).</p>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Company Information</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Subscribe</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section social-icons">
          <a href="https://www.facebook.com/Gabs.ChickenInasal" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/gabs.chickeninasal" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gab's Chicken Inasal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
