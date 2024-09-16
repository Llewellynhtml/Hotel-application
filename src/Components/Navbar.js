import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaLanguage, FaCaretDown } from "react-icons/fa";
import logo from "../One&Only 1.png";
import './nav.css';

function Navbar() {
  const [showAccommodationDropdown, setShowAccommodationDropdown] = useState(false);

  const toggleAccommodationDropdown = () => {
    setShowAccommodationDropdown(!showAccommodationDropdown);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <FaLanguage className="nav-icon" title="English" />
          <FaPhone className="nav-icon" title="Call Us" />
          <FaEnvelope className="nav-icon" title="Email Us" />
          <button className="newsletter-btn">Newsletter</button>
          <button className="newsletter-btn">Resort</button>
        </div>

        <div className="nav-center">
          <img src={logo} alt="Hotel Logo" className="logo" />
        </div>

        <div className="nav-right">
          <button className="book-now">Book Now</button>
        </div>
      </nav>

      <hr className="divider" />

      <div className="secondary-nav">
        <Link to="/experience" className="secondary-link">
          Experience
        </Link>
        <Link to="/offers" className="secondary-link">
          Offers
        </Link>

        <div className="dropdown">
          <button
            className="secondary-link accommodation-link"
            onClick={toggleAccommodationDropdown}
          >
            Accommodation <FaCaretDown />
          </button>
          {showAccommodationDropdown && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <Link
                  to="/accommodation/rooms"
                  className="dropdown-link"
                  onClick={() => setShowAccommodationDropdown(false)}
                >
                  Rooms
                </Link>
              </div>
              <div className="dropdown-item">
                <Link
                  to="/accommodation/suites"
                  className="dropdown-link"
                  onClick={() => setShowAccommodationDropdown(false)}
                >
                  Suites
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link to="/dining" className="secondary-link">
          Dining
        </Link>
        <Link to="/events" className="secondary-link">
          Events
        </Link>
        <Link to="/about" className="secondary-link">
          About
        </Link>
      </div>
    </>
  );
}

export default Navbar;
