import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import logo from "../One&Only 1.png";
import "./nav.css";

function Navbar() {
  const [showAccommodationDropdown, setShowAccommodationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const toggleAccommodationDropdown = () => {
    setShowAccommodationDropdown((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown") && !e.target.closest(".profile-dropdown")) {
      setShowAccommodationDropdown(false);
      setShowProfileDropdown(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
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
      setUser(currentUser);
    });

    return () => {
      document.removeEventListener("click", handleClickOutside);
      unsubscribe();
    };
  }, [auth]);

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
                    <strong>{user.displayName || "User"}</strong>
                  </p>
                  <p>{user.email}</p>
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
        <Link to="/experience" className="secondary-link">Experience</Link>
        <Link to="/offers" className="secondary-link">Offers</Link>

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
              <Link to="/accommodation/suites" className="dropdown-link">Suites</Link>
            </div>
          )}
        </div>

        <Link to="/dining" className="secondary-link">Dining</Link>
        <Link to="/events" className="secondary-link">Events</Link>
        <Link to="/about" className="secondary-link">About</Link>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>User Profile</h2>
            <div className="profile-details">
              <div className="profile-image-container">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="profile-image" />
                ) : (
                  <p>No profile picture uploaded.</p>
                )}
                <input type="file" accept="image/*" onChange={handleProfilePicChange} />
              </div>
              <p><strong>Name:</strong> {user.displayName || "User"}</p>
              <p><strong>Surname:</strong> {user.displayName ? user.displayName.split(" ")[1] : "Not provided"}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button className="close-button" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
