import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import { signInStart, signInSuccess, signInFailure } from '../Redux/authSlice';
import { auth, db } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './signin.css'; // Update as needed for styling
import logo from '../One&Only 1.png'; 

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check user role in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists() && userDoc.data().role === 'admin') {
        dispatch(signInSuccess(user)); // Dispatch success action
        alert('Admin login successful!');
        navigate('/admin'); // Redirect to admin page
      } else {
        dispatch(signInSuccess(user)); // Dispatch success action
        alert('Login successful!');
        navigate('/'); // Redirect to home page
      }
    } catch (err) {
      dispatch(signInFailure('Login failed. Please check your credentials.'));
    }
  };

  return (
    <div className="auth-container">
      <img src={logo} alt="logo" className="logo" />
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>

      <div className="auth-links">
        <p className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link> {/* Link to ForgotPassword page */}
        </p>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link> {/* Link to Signup page */}
        </p>
      </div>
    </div>
  );
};

export default Signin;
