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
                <Link to="/accommodation/rooms" className="dropdown-link">
                  Rooms
                </Link>
                <div className="dropdown-submenu">
                  {/* Rooms list */}
                  <Link to="/accommodation/rooms/room1" className="dropdown-link">
                    Room 1
                  </Link>
                  <Link to="/accommodation/rooms/room2" className="dropdown-link">
                    Room 2
                  </Link>
                  <Link to="/accommodation/rooms/room3" className="dropdown-link">
                    Room 3
                  </Link>
                  <Link to="/accommodation/rooms/room4" className="dropdown-link">
                    Room 4
                  </Link>
                  <Link to="/accommodation/rooms/room5" className="dropdown-link">
                    Room 5
                  </Link>
                  <Link to="/accommodation/rooms/room6" className="dropdown-link">
                    Room 6
                  </Link>
                  <Link to="/accommodation/rooms/room7" className="dropdown-link">
                    Room 7
                  </Link>
                  <Link to="/accommodation/rooms/room8" className="dropdown-link">
                    Room 8
                  </Link>
                  <Link to="/accommodation/rooms/room9" className="dropdown-link">
                    Room 9
                  </Link>
                  <Link to="/accommodation/rooms/room10" className="dropdown-link">
                    Room 10
                  </Link>
                </div>
              </div>

              <div className="dropdown-item">
                <Link to="/accommodation/suites" className="dropdown-link">
                  Suites
                </Link>
                <div className="dropdown-submenu">
                  
                  <Link to="/accommodation/suites/suite1" className="dropdown-link">
                    Suite 1
                  </Link>
                  <Link to="/accommodation/suites/suite2" className="dropdown-link">
                    Suite 2
                  </Link>
                  <Link to="/accommodation/suites/suite3" className="dropdown-link">
                    Suite 3
                  </Link>
                  <Link to="/accommodation/suites/suite4" className="dropdown-link">
                    Suite 4
                  </Link>
                  <Link to="/accommodation/suites/suite5" className="dropdown-link">
                    Suite 5
                  </Link>
                  <Link to="/accommodation/suites/suite6" className="dropdown-link">
                    Suite 6
                  </Link>
                </div>
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
