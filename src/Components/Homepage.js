import React from "react";
import "./HomePage.css";
import BookingSection from "./BookingSection";
import Bridge from "./bridge";
import Mothercity from "./mothercity";
import ImageSlider from "./ImageSlider";
import Suite from "./suite";
import Spa from "./spa";
import Nobu from "./Nobu";
import Adventure from "./adventure";
import Landscape from "./Landscape";
import palm from './data/palms.png';
import Footer from "./footer";
import Navbar from "./Navbar"; // Import the combined Navbar

function HomePage() {
  return (
    <div className="homepage">
      <Navbar /> {/* Navbar now includes secondary navigation */}
      
      <div className="hero-image">
        <div className="hero-text">
          <h1>One&Only Cape Town, Luxury Waterfront Resort</h1>
          <p>Cape Town's most spectacular waterfront resort</p>
        </div>
      </div>
      
      <BookingSection/>
      <Bridge/>
      <Mothercity/>
      <ImageSlider/>
      <Suite/>
      <Spa/>
      <Nobu/>
      <Adventure/>
      <Landscape/>
      <div className="palm-tree">
        <img src={palm} alt="palm tree"></img>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
