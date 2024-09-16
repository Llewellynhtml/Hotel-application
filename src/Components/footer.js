import React from 'react';
import './footer.css'; 
import palms from './data/palms (1).png';
import logs from './data/Logo One&Only.png'

const Footer = () => {
  return (
    <div>
      
      <div className="footer-image">
        <img src={palms} alt="Footer Hero" />
        <div className="newsletter-signup">
          <h2>Stay Connected</h2>
          <p>Sign up for our newsletter</p>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      
      <footer className="footer-hero">
        <div className="footer-container">
      
          <div className="footer-logo">
            <img src={logs} alt="One&Only Cape Town Logo" />
          </div>

      
          <div className="footer-links">
            <div className="footer-section">
              <h3>Resort Information</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Transfers</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Bookings & Cancellations</a></li>
                <li><a href="#">Website Terms</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>One&Only Resorts</h3>
              <ul>
                <li><a href="#">One&Only</a></li>
                <li><a href="#">Our Resorts</a></li>
                <li><a href="#">Private Homes</a></li>
                <li><a href="#">Media Centre</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">Newsletter Signup</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Kerzner</h3>
              <ul>
                <li><a href="#">Atlantis</a></li>
                <li><a href="#">Siro</a></li>
                <li><a href="#">Rare Finds</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
