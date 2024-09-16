import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are committed to providing the best service for our guests.
            Experience luxury like never before at our waterfront resort.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/accommodation">Accommodation</a></li>
            <li><a href="/dining">Dining</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhone /> +123 456 7890</p>
          <p><FaEnvelope /> info@luxuryhotel.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 One&Only Luxury Resort. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
