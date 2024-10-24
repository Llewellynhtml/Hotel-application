import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import logo from "../One&Only 1.png";
import "./nav.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookingToFirestore } from "../Redux/dbslice";



function Navbar() {
  const [showAccommodationDropdown, setShowAccommodationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [showOffersDropdown, setShowOffersDropdown] = useState(false);
  const [showDiningDropdown, setShowDiningDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState("");
  const [bookings, setBookings] = useState([]); 
  const [favorites, setFavorites] = useState([]); 
  const [showFavoritesModal, setShowFavoritesModal] = useState(true);
  const [showBookingsModal, setShowBookingsModal] = useState(true); 
  const auth = getAuth();
  const navigate = useNavigate();

  const { userBookings} = useSelector(state => state.data)

  const dispatch = useDispatch() ;

  console.log(userBookings)

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
    console.log("lllllkjh", bookings);
    setShowProfileModal(true);
    setShowProfileDropdown(false);
  };

  const handleCloseModal = () => {
    setShowProfileModal(false);
    setShowFavoritesModal(false);
    setShowBookingsModal(false);
    
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

  const addBooking = (roomDetails) => {
    setBookings((prevBookings) => [
      ...prevBookings,
      { ...roomDetails, paymentStatus: true }, 
    ]);
  };

  const addFavorite = (roomDetails) => {
    setFavorites((prevFavorites) => [...prevFavorites, roomDetails]);
  };

  

  const exampleRoomDetails = {
    roomName: "Ocean View Suite",
    checkIn: "2024-01-01",
    endDate: "2024-01-05",
    totalPrice: "$1000",
    adults: 2,
    children: 1,
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userProfile = {
          firstName: currentUser.displayName ? currentUser.displayName.split(" ")[0] : "User",
          lastName: currentUser.displayName ? currentUser.displayName.split(" ")[1] : "Not provided",
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
  

useEffect (()=>{
  dispatch( fetchBookingToFirestore())
} , [])
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
              <button className="book-now" onClick={() => addBooking(exampleRoomDetails)}>Book Now</button> 
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
            Offers <FaCaretDown />
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
            <div className="profile-details">
              {userProfile && (
                <>
                  <div className="profile-image-container">
                    <img 
                      src={profilePic || "default-profile-pic-url"} 
                      alt="Profile" 
                      className="profile-image" 
                    />
                  </div>
                  <p><strong>firstName:</strong> {userProfile.firstName}</p>
                  <p><strong>lastName:</strong> {userProfile.lastName}</p>
                  <p><strong>Email:</strong> {userProfile.email}</p>
                  <input type="file" onChange={handleProfilePicChange} />

                  
                  <div className="links-container">
                    <button 
                      className="favorites-link" 
                      onClick={() => {
                        addFavorite("Ocean View Suite"); 
                        setShowFavoritesModal(true);
                      }}
                    >
                      Show Favorites ❤️
                    </button>
                    <button 
                      className="bookings-link" 
                      onClick={() => setShowBookingsModal(true)}
                      
                    >
                      Show Bookings ✔️
                    </button>
                  </div>

                  
                  {showBookingsModal && (
                    <div className="bookings-table">
                      <h3>Your Bookings</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>roomName</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>startDate</th>
                            <th>endDate</th>
                            <th>TotalPrice</th>
                            <th>Adults</th>
                            <th>Children</th>
                            <th>Payment Status</th> 
                          </tr>
                        </thead>
                        <tbody>
                          {bookings.map((booking, index) => (
                            <tr key={index}>
                               <td>{booking.roomName}</td>
                              <td>{booking.firstName}</td>
                              <td>{booking.lastName}</td>
                              <td>{booking.startDate}</td>
                              <td>{booking.endDate}</td>
                              <td>{booking.totalPrice}</td>
                              <td>{booking.adults}</td>
                              <td>{booking.children}</td>
                              <td>
                                {booking.paymentStatus ? (
                                  <span role="img" aria-label="Payment Successful">✅</span> 
                                ) : (
                                  <span style={{ padding: "10px" }}></span> 
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  
                  {showFavoritesModal && (
                    <div className="favorites-table">
                      <h3>Your Favorites</h3>
                      <ul>
                        {favorites.map((favorite, index) => (
                          <li key={index}>{favorite}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
            <button onClick={handleCloseModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;