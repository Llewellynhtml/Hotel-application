import React from "react";
import "./adventure.css";
import mount from './data/table mountain cape.jpg';
import wine from "./data/wine experience.jpg";
import animal from "./data/animal encounter.jpg";

function Adventure() {
  return (
    <div className="Adv-container">
      <div className="adv-title">
        <h1>YOUR CAPE TOWN ADVENTURE</h1>
        <hr className="adv-line" />
        <p className="adv-p">
          Discover the best of Cape Town with our curated experiences including
          whale-watching and paddle-boarding, exploring the Cape Winelands and
          hiking to the summit of iconic Table Mountain.
        </p>
      </div>

      <div className="Adv-card">
        <div className="adv-item">
          <img src={mount} alt="Table Mountain" className="adv-img" />
          <h2>TABLE MOUNTAIN</h2>
          <p className="adv-p">Scale Table Mountain, the unforgettable icon of Cape Town</p>
        </div>
        
        <div className="adv-item">
          <img src={wine} alt="Wine Experience" className="adv-img" />
          <h2>WINE EXPERIENCE</h2>
          <p className="adv-p">Discover our signature wine experience in the Cape Winelands</p>
        </div>
        
        <div className="adv-item">
          <img src={animal} alt="Animal Encounter" className="adv-img" />
          <h2>ENCOUNTER</h2>
          <p className="adv-p">Experience whale watching and other unforgettable animal encounters</p>
        </div>
      </div>
    </div>
  );
}

export default Adventure;
