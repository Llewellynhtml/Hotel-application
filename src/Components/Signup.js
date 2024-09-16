import React from 'react';
import logo from '../One&Only 1.png';

function Signup() {
  return (
    <div className="auth-container">
      <img src={logo} alt="logo" className="logo"/>
      <h1>Create an Account</h1>
      <p className="subheading">Sign up to get started!</p>
      <form className="auth-form">
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="password" name="password" placeholder="Enter Password" required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
        <button type="submit">Create Account</button>
        <p>or sign up with:</p>
        <div className="social-auth">
          <a href="#" className="social-btn google"><i className="fab fa-google"></i> Google</a>
          <a href="#" className="social-btn facebook"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="#" className="social-btn twitter"><i className="fab fa-twitter"></i> X</a>
          <a href="#" className="social-btn apple"><i className="fab fa-apple"></i> Apple</a>
        </div>
        <p className="auth-link">Already have an account? <a href="/signin">Sign in</a></p>
      </form>
    </div>
  );
}

export default Signup;
