import React, { useState } from "react";
import "./ImageSlider.css";

import image1 from "./data/curated 1.jpg";
import image2 from "./data/curiosities 2.jpg";
import image3 from "./data/design guide 3.jpg";
import image4 from "./data/heritage 4.jpg";
import image5 from "./data/Mindful morning 5.jpg";
import image6 from "./data/natural wonders 6.jpg";
import image7 from "./data/nobu-vegan-omakase 7.jpg";
import image8 from "./data/rooibos 8.jpg";
import image9 from "./data/sake-food 9.jpg";

const images = [
  {
    src: image1,
    name: "Image 1CURATED CAPE TOWN TIPS",
    description:
      "Discover the many sides to Cape Town, from exhilarating adventures in the great outdoors to destination dining, pampering wellness, and illuminating art and culture. Our head Concierge, Tashwin Kalie, shares his trusted recommendations for the Mother City.",
    link: "/page1",
  },
  {
    src: image2,
    name: "CAPE TOWN HERITAGE GUIDE",
    description:
      "Explore Cape Town's rich heritage with insights from our local experts, uncovering hidden gems and iconic landmarks.",
    link: "/page2",
  },
  {
    src: image3,
    name: "ROOIBOS: SOUTH AFRICAN TEA",
    description:
      "Discover the story of rooibos, from its early uses by indigenous people to its modern status as one of the country's favorite exports. Try our signature blend of South Africa's caffeine-free tea, served in a choice of cinematic settings.",
    link: "/page3",
  },
  {
    src: image4,
    name: "SAKE AT NOBU",
    description:
      "From delicate flavors to time-honored rituals, Japan's favorite drink, sake, is part of a rich world of tradition. Nobu Restaurant's General Manager, Rayharn Rahman, shares the secrets to sipping sake, from serving style to sushi pairings.",
    link: "/page4",
  },
  {
    src: image5,
    name: "FOR THE CURIOUS",
    description:
      "A new chapter for One&Only Cape Town has arrived. We invite you to experience a playground of discovery in newly reimagined spaces.",
    link: "/page5",
  },
  {
    src: image6,
    name: "MINDFUL MORNINGS",
    description:
      "Rise with the sun and make the most of mornings at One&Only Cape Town and beyond. Whether it's a slower-paced yoga session or an invigorating swim, an active start is the way to begin your day.",
    link: "/page6",
  },
  {
    src: image7,
    name: "ONLY HERE: CAPE TOWN'S NATURAL WONDERS",
    description:
      "Encounter the best of Cape Town hiking and nature experiences at luxury waterfront resort One&Only Cape Town. Framed by Table Mountain, it's the ideal sanctuary for an active holiday, exploring the jaw-dropping surrounding landscape from peak tops to the sea.",
    link: "/page7",
  },
  {
    src: image8,
    name: "ONLY HERE: CAPE TOWN ART & DESIGN GUIDE",
    description:
      "Explore inspiring Cape Town art experiences and local design with our curated travel guide to the city's dynamic cultural scene, shared by an art world insider. Discover the best private museums and galleries and the South African talents to watch.",
    link: "/page8",
  },
  {
    src: image9,
    name: "NOBU'S VEGAN OMAKASE MENUS",
    description:
      "Nobu Cape Town has introduced exciting new vegan and vegetarian offerings to their repertoire. The six-course Omakase set-menus elevate plant-based ingredients to new heights, offering diners delicious meat-free alternatives to the existing signature Omakase menu, reflective of Nobu's exceptional Japanese cuisine with Peruvian influence.",
    link: "/page9",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? images.length - (images.length % 3 || 3) : prevIndex - 3
    );
  };
  

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
        ❮
      </button>
      <div className="slider-content">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div className="slide" key={index}>
            <div className="slide-container">
              <img src={image.src} alt={image.name} className="slider-image" />
              <div className="slider-text">
                <h2 className="slider-title">{image.name}</h2>
                <p className="slider-description">{image.description}</p>
                <a href={image.link} className="slider-button-link">
                  Go to Page
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        ❯
      </button>
      <div className="pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
