import React from "react";
import "./adventure.css";
import mount from './data/table mountain cape.jpg';
import wine from "./data/wine experience.jpg";
import animal from "./data/animal encounter.jpg";

function Adventure() {
  return (
    <div className="Adv-container">
        <div className="Adv-card">
      <div className="adv-title">
        <h1>YOUR CAPE TOWN ADVENTURE</h1>
        <hr className="adv-line" />
        <p className="adv-p">
          Discover the best of Cape Town with our curated experiences including
          whale-watching and paddle-boarding, exploring the Cape Winelands and
          hiking to the summit of iconic Table Mountain.
        </p>
        <button>EXPLORE</button>
      </div>
      <div>
        <img src={mount} alt="table mountain" className="mountain-img"/>
        <h1>TABLE MOUNTAIN</h1>
        <p className="adv-p">Scal Table ountain, the unforgetable icon of cape town</p>
        <button>EXPLORE</button>
      </div>
      <div>
        <img src={wine} alt="wine" className="mountain-image" />
        <h1>WINE EXPERIENCE</h1>
        <p className="adv-p">Discover our signature wine experience in the cape town Winelands</p>
        <button>EXPLORE</button>
      </div>
      <div>
        <img src={animal} alt="animal" className="mountain-image"/>
        <h1>ANIMAL ENCOUNTER</h1>
        <p className="adv-p">
          Experience whale watching and other unforgettable animal encounters
          with us
        </p>
        <button>EXPLORE</button>
      </div>
      </div>
    </div>
  );
}

export default Adventure;
