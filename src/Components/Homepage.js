import React from "react";
import "./HomePage.css";
import BookingSection from "./BookingSection";
import Bridge from "./bridge";
import Mothercity from "./mothercity";
import ImageSlider from "./ImageSlider";

import Adventure from "./adventure";

import Footer from "./footer";
import Navbar from "./Navbar";



function HomePage() {
  return (
    <div className="homepage">
      <Navbar />

      <div className="hero-image">
        <div className="hero-text">
          <h1>One&Only Cape Town, Luxury Waterfront Resort</h1>
          <p>Cape Town's most spectacular waterfront resort</p>
        </div>
      </div>

      <BookingSection />
      <Bridge />
      <Mothercity />
      <ImageSlider />

      <Adventure />
      <div className="palm-tree"></div>
      <Footer />
    </div>
  );
}

export default HomePage;
