import React from 'react';
import './footer.css'; 
import logs from './data/One&OnlyN ITALIC B.png';
// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="footer-hero">
        <div className="footer-container">

          {/* Logo on the left */}
          <div className="footer-logo">
            <img src={logs} alt="One&Only Cape Town Logo" />
          </div>

          {/* Footer links on the right */}
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
                <li><a href="#">Media Centre</a></li>
                <li><a href="#">Awards</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Kerzner</h3>
              <ul>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr />

        {/* Social Media Section */}
        <div className="footer-social">
          <h3 className='HS3'>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="#" aria-label="X">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
