import React, { useState, useEffect } from 'react';
import logo from '../One&Only 1.png';
import './signin.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase'; // Import Firebase
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { doc, getDoc } from 'firebase/firestore'; 
import { signInStart, signInSuccess, signInFailure } from '../Redux/authSlice';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    try {
      // Sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the user is an admin
      const userDoc = await getDoc(doc(db, 'users', user.uid));

      if (userDoc.exists() && userDoc.data().role === 'admin') {
        dispatch(signInSuccess(user)); // Dispatch success action to Redux
        alert('Successfully logged in!');
        navigate('/admin'); // Redirect to the admin page
      } else {
        alert('Successfully logged in!');
        navigate('/'); // Redirect to the admin page
      }
    } catch (error) {
      dispatch(signInFailure('Login failed. Please check your credentials.'));
    }
  };

  return (
    <div className="auth-container">
      <img src={logo} alt="logo" className="logo" />
      <h1>Welcome Back!</h1>
      <p className="subheading">Please enter your details below.</p>
      <form className="auth-form" onSubmit={handleSignIn}>
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
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="remember">
          <input type="checkbox" name="remember" />
          Remember me for 30 days
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        {error && <p className="error-message">{error}</p>}
        <p className="forgot-password">
          <a href="#">Forgot password?</a>
        </p>
        <h1>or sign in with:</h1>
        <div className="social-auth">
          <a href="#" className="social-btn google">
            <i className="fab fa-google"></i> Google
          </a>
          <a href="#" className="social-btn facebook">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="social-btn twitter">
            <i className="fab fa-twitter"></i> X
          </a>
          <a href="#" className="social-btn apple">
            <i className="fab fa-apple"></i> Apple
          </a>
        </div>
      </form>
    </div>
  );
}

export default Signin;
