import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase Auth methods
import { useNavigate } from 'react-router-dom';
import './UserProfile.css'; // Add styling for the profile component

const UserProfile = () => {
  const [user, setUser] = useState(null); // State to hold the logged-in user
  const navigate = useNavigate();
  const auth = getAuth(); // Firebase Auth instance

  // Fetch user info from Firebase Auth
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      // Assuming user's first name is stored in the displayName field of Firebase Auth
      setUser({
        firstName: currentUser.displayName || "User",
        email: currentUser.email,
      });
    }
  }, [auth]);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
      navigate('/signin'); // Redirect to the sign-in page after logging out
    } catch (error) {
      alert('Error logging out. Please try again.');
    }
  };

  if (!user) {
    return <p>Loading...</p>; // Show loading while fetching user data
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-details">
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
