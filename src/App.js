import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Rooms from "./Components/Rooms";

function App() {
  return (
    <div className="App">
      < Rooms />
      <Router>
      
      <Routes>
        {/*
        <Route path="/" element={<Homepage />} />*/}
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
