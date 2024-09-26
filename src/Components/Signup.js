import React, { useState, useEffect } from 'react';
import logo from '../One&Only 1.png';
import './signin.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../Redux/authSlice';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { user, loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault(); 
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Dispatch the sign-up action
    dispatch(signUp({ firstName, lastName, email, password }));
  };

  useEffect(() => {
    if (user) {
      alert("Registered Successfully!");
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="auth-container">
      <img src={logo} alt="logo" className="logo" />
      <h1>Create an Account</h1>
      <p className="subheading">Sign up to get started!</p>
      <form className="auth-form" onSubmit={handleSignUp}>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          required 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          required 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Enter Password" 
          required 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          required 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
