import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaCaretDown, FaUserCircle, FaHeart } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import logo from "../One&Only 1.png";
import "./nav.css";

function Navbar() {
  const [showAccommodationDropdown, setShowAccommodationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [showOffersDropdown, setShowOffersDropdown] = useState(false);
  const [showDiningDropdown, setShowDiningDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false); // Added for Events dropdown
  const [showAboutDropdown, setShowAboutDropdown] = useState(false); // Added for About dropdown
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const toggleAccommodationDropdown = () => {
    setShowAccommodationDropdown((prev) => !prev);
  };

  const toggleExperienceDropdown = () => {
    setShowExperienceDropdown((prev) => !prev);
  };

  const toggleOffersDropdown = () => {
    setShowOffersDropdown((prev) => !prev);
  };

  const toggleDiningDropdown = () => {
    setShowDiningDropdown((prev) => !prev);
  };

  const toggleEventsDropdown = () => {
    setShowEventsDropdown((prev) => !prev);
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown") && !e.target.closest(".profile-dropdown")) {
      setShowAccommodationDropdown(false);
      setShowProfileDropdown(false);
      setShowExperienceDropdown(false);
      setShowOffersDropdown(false);
      setShowDiningDropdown(false);
      setShowEventsDropdown(false);
      setShowAboutDropdown(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userProfile");
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleProfileClick = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  const handleViewProfile = () => {
    setShowProfileModal(true);
    setShowProfileDropdown(false);
  };

  const handleCloseModal = () => {
    setShowProfileModal(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userProfile = {
          name: currentUser.displayName ? currentUser.displayName.split(" ")[0] : "User",
          surname: currentUser.displayName ? currentUser.displayName.split(" ")[1] : "Not provided",
          email: currentUser.email,
        };
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
      } else {
        setUser(null);
        localStorage.removeItem("userProfile");
      }
    });

    return () => {
      document.removeEventListener("click", handleClickOutside);
      unsubscribe();
    };
  }, [auth]);

  const userProfile = JSON.parse(localStorage.getItem("userProfile"));

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <FaPhone className="nav-icon" title="Call Us" aria-label="Call Us" />
          <FaEnvelope className="nav-icon" title="Email Us" aria-label="Email Us" />
        </div>

        <div className="nav-center">
          <img src={logo} alt="Hotel Logo" className="logo" />
        </div>

        <div className="nav-right">
          {user ? (
            <div className="profile-dropdown">
              <FaUserCircle
                className="nav-icon profile-icon"
                title="Profile"
                onClick={handleProfileClick}
              />
              {showProfileDropdown && (
                <div className="profile-dropdown-content">
                  <p>
                    <strong>{userProfile?.name || "User"}</strong>
                  </p>
                  <p>{userProfile?.email}</p>
                  <button onClick={handleViewProfile} className="view-button">
                    View Profile
                  </button>
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" className="nav-auth-btn">SignIn</Link>
              <Link to="/signup" className="nav-auth-btn">SignUp</Link>
              <button className="book-now">Book Now</button>
            </>
          )}
        </div>
      </nav>

      <hr className="divider" />

      <div className="secondary-nav">
        <div className="dropdown">
          <button
            className="secondary-link"
            onClick={toggleExperienceDropdown}
            aria-expanded={showExperienceDropdown}
          >
            Experience <FaCaretDown />
          </button>
          {showExperienceDropdown && (
            <div className="dropdown-content">
              <Link to="/experience/wellness" className="dropdown-link">Wellness</Link>
              <Link to="/experience/fitness" className="dropdown-link">Fitness</Link>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="secondary-link"
            onClick={toggleOffersDropdown}
            aria-expanded={showOffersDropdown}
          >
            Offer <FaCaretDown />
          </button>
          {showOffersDropdown && (
            <div className="dropdown-content">
              <Link to="/Offers" className="dropdown-link">Choose More</Link>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="secondary-link accommodation-link"
            onClick={toggleAccommodationDropdown}
            aria-expanded={showAccommodationDropdown}
          >
            Rooms <FaCaretDown />
          </button>
          {showAccommodationDropdown && (
            <div className="dropdown-content">
              <Link to="/accommodation/rooms" className="dropdown-link">Rooms</Link>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="secondary-link"
            onClick={toggleDiningDropdown}
            aria-expanded={showDiningDropdown}
          >
            Dining <FaCaretDown />
          </button>
          {showDiningDropdown && (
            <div className="dropdown-content">
              <Link to="/dining/winestudio" className="dropdown-link">Wine Studio</Link>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="secondary-link"
            onClick={toggleEventsDropdown}
            aria-expanded={showEventsDropdown}
          >
            Events <FaCaretDown />
          </button>
          {showEventsDropdown && (
            <div className="dropdown-content">
              <Link to="/events/corporate" className="dropdown-link">Corporate Events</Link>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="secondary-link"
            onClick={toggleAboutDropdown}
            aria-expanded={showAboutDropdown}
          >
            About <FaCaretDown />
          </button>
          {showAboutDropdown && (
            <div className="dropdown-content">
              <Link to="/about/us" className="dropdown-link">About Us</Link>
            </div>
          )}
        </div>
      </div>

      {showProfileModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>User Profile</h2>
            {/* Modal content */}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
