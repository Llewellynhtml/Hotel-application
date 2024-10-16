import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../Redux/authSlice'; // Import the resetPassword action
import './signin.css'; 
import logo from '../One&Only 1.png';  // Include your logo

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    
    if (email) {
      dispatch(resetPassword({ email }));
      setMessage('Password reset email sent! Check your inbox.');
      setError('');
    } else {
      setError('Please enter a valid email address.');
      setMessage('');
    }
  };

  return (
    <div className="auth-container">
      <img src={logo} alt="logo" className="logo" /> {/* Display logo */}
      <h1>Forgot Password?</h1>
      <p>Enter your email address to reset your password.</p>
      <form onSubmit={handlePasswordReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;

