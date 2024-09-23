import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaLanguage, FaCaretDown } from 'react-icons/fa';
import logo from '../One&Only 1.png';
import './nav.css';

function Navbar() {
  const [showAccommodationDropdown, setShowAccommodationDropdown] = useState(false);

  const toggleAccommodationDropdown = () => {
    setShowAccommodationDropdown(prev => !prev);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown')) {
      setShowAccommodationDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <FaLanguage className="nav-icon" title="Language" aria-label="Language" />
          <FaPhone className="nav-icon" title="Call Us" aria-label="Call Us" />
          <FaEnvelope className="nav-icon" title="Email Us" aria-label="Email Us" />
          <button className="nav-btn" aria-label="Newsletter">Newsletter</button>
          <button className="nav-btn" aria-label="Resort">Resort</button>
        </div>

        <div className="nav-center">
          <img src={logo} alt="Hotel Logo" className="logo" />
        </div>

        <div className="nav-right">
          <Link to="/signin" className="nav-auth-btn">Sign In</Link>
          <Link to="/signup" className="nav-auth-btn">Sign Up</Link>
          <button className="book-now">Book Now</button>
        </div>
      </nav>

      <hr className="divider" />

      <div className="secondary-nav">
        <Link to="/experience" className="secondary-link">Experience</Link>
        <Link to="/offers" className="secondary-link">Offers</Link>

        <div className="dropdown">
          <button
            className="secondary-link accommodation-link"
            onClick={toggleAccommodationDropdown}
            aria-expanded={showAccommodationDropdown}
          >
            Accommodation <FaCaretDown />
          </button>
          {showAccommodationDropdown && (
            <div className="dropdown-content">
              <Link to="/accommodation/rooms" className="dropdown-link">Rooms</Link>
              <Link to="/accommodation/suites" className="dropdown-link">Suites</Link>
            </div>
          )}
        </div>

        <Link to="/dining" className="secondary-link">Dining</Link>
        <Link to="/events" className="secondary-link">Events</Link>
        <Link to="/about" className="secondary-link">About</Link>
      </div>
    </>
  );
}

export default Navbar;
