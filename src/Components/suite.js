import React from "react";
import data from "./data/table-mountain-suite-living.jpg";
import zero from "./data/ZERO LOGO.png";
import { Link } from "react-router-dom";
import "./suite.css";

function Suite() {
  return (
    <div className="flex-container">
      <div>
        <img src={data} alt="suite" />
      </div>

      <div className="Zero">
        <hr/>
        <img src={zero} alt="zero logo"/>
        <h1>
          SPACIOUS STAYS <br></br>IN THE CITY
        </h1>
        <hr/>
        <p className="text">
          Indulge in breathtaking views of Table <br></br> Mountain and our
          harbour from Cape<br></br> Town's largest hotel rooms and suites
        </p>

        <Link className="boox">RESERVE</Link>
        <hr/>
      </div>
    </div>
  );
}

export default Suite;
