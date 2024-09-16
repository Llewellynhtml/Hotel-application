import React from "react";
import oil from "./data/Oil.jpg";
import strength from "./data/Strech.jpg";
import './spa.css';

function Spa() {
  return (
    <div className="flex-Spa">
        <div>
            <h1>ONE&ONLY SPA</h1>
            <img src={oil} alt="Oil" />
        </div>
      

      <div className="strength">
        <img src={strength} alt="strength" className="Strength-img"/>
        <p className="paragraph">
          Setting the benchmark for hotels in Cape Town,<br></br> One&Only's
          exclusive Spa Island is surrounded <br></br>by private waterways and
          offers everything your body<br></br> craves. Choose from our
          personalised spa<br></br> journeys, under the expert care of our hand-
          <br></br>picked ESPA therapists.
        </p>
        <button className="Spa-btn">EXPLORE</button>
      </div>
    </div>
  );
}

export default Spa;
