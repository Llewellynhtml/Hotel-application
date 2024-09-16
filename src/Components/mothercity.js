import React, { useState } from 'react';
import pictures from '../Components/Pictures/mothercity.jpg';
import './mothercity.css';

function Mothercity() {
  const [isMoved, setIsMoved] = useState(false);

  const handleDiscoverClick = () => {
    setIsMoved(!isMoved); 
  };

  return (
    <div className="mothercity">
      <div className="mothercity-content">
        <div className="mothercity-text">
          <h1 className="mothercity-title">ONE LIFE STORIES</h1>
          <p className="mothercity-description">
            Get a true flavour of the other City with these inside scoops from
            One&Only Cape Town. Discover inspiring conservation projects,
            authentic craftsmanship, and a host of local experiences and
            adventures, revealing different sides to our remarkable resort.
          </p>
          <button className="mothercity-button" onClick={handleDiscoverClick}>
            Discover
          </button>
        </div>
        <div className="mothercity-image-container">
          <img
            src={pictures}
            alt="One Life Stories"
            className={`mothercity-image ${isMoved ? 'move' : ''}`} 
          />
        </div>
      </div>
    </div>
  );
}

export default Mothercity;
