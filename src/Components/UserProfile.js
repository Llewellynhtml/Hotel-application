import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, fetchFavorites, fetchUserProfile } from '../redux/dataSlice';
import './UserProfile.css'; 

const UserProfile = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();
  const auth = getAuth(); 
  const dispatch = useDispatch();
  
  const { bookings, favorites, userProfile, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser({
        uid: currentUser.uid,
        email: currentUser.email,
      });
      
      dispatch(fetchUserProfile(currentUser.uid)); 
      dispatch(fetchBookings(currentUser.uid)); 
      dispatch(fetchFavorites(currentUser.uid)); 
    } else {
      navigate('/signin');
    }
  }, [auth, dispatch, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
      navigate('/signin'); 
    } catch (error) {
      alert('Error logging out. Please try again.');
    }
  };

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {userProfile && (
        <div className="profile-details">
          <p><strong>First Name:</strong> {userProfile.firstName || "User"}</p>
          <p><strong>Last Name:</strong> {userProfile.lastName || "Not provided"}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
        </div>
      )}
      ...
      <h3>Your Bookings:</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.roomName} - {booking.checkIn} to {booking.checkOut}
            {booking.paymentStatus ? (
              <span style={{ color: 'green' }}> ✔️</span>
            ) : (
              <span style={{ color: 'red' }}> ❌</span>
            )}
          </li>
        ))}
      </ul>
      <h3>Your Favorite Rooms:</h3>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.roomName}</li>
        ))}
      </ul>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
