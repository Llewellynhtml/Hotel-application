import React from "react";
import logo from "../One&Only 1.png";

function Signin() {
  return (
    <div className="auth-container">
      <img src={logo} alt="logo" className="logo" />
      <h1>Welcome Back!</h1>
      <p className="subheading">Please enter your details below.</p>
      <form className="auth-form">
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <label className="remember">
          <input type="checkbox" name="remember" />
          Remember me for 30 days
        </label>
        <button type="submit">Sign In</button>
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
