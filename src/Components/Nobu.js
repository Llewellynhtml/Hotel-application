import React from "react";
import "./Nobu.css";
import Chef from "./data/white cheff.jpg";

function Nobu() {
  return (
    <div className="Nobu">
    <div className="Parent-Gold">
      <div>
        <img src={Chef} alt="cheff" />
      </div>
      <div className="Parent-Gold-2">
      <div>
        <h1>AFRICA'S ONLY <br></br>NOBU, THE PLACE<br></br> TO BE</h1>
        <hr/>
      </div>
      <div>
        <p className="Delight-text">  
          Delight in Japanese-Peruvian flavours in <br></br>the city’s most famous
          restaurant, only here <br></br>at One&Only Cape Town.
        </p>
      </div>
      <div>
        <button className="Delight-btn">EXPLORE</button>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Nobu;
