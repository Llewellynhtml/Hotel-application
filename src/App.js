import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Components/signin';
import Signup from './Components/Signup';
import './App.css';
import Homepage from './Components/Homepage';

function App() {
  return (
    <Router>
    
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={
            <div>
              <h1>Welcome to the App</h1>
              <p>Please <a href="/signin">Sign In</a> or <a href="/signup">Sign Up</a>.</p>
            </div>
          } />
        </Routes>
      
    </Router>
  );
}

export default App;