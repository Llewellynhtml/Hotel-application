import React from "react";
import "./Rooms.css";
import roomz from "./data/OO_CapeTown_IslandSuite-_Bedroom_080_HR.jpg";
import Amenities from "./Amenities";

const Rooms = () => {
  return (
    <div className="Marina-Rooms">
      <div className="img-marina">
        <h1>One Bedroom Marina Suite</h1>
        <img src={roomz} alt="room" />
        <div className="First-line">
          <h3>
            View:<p>Mountain</p>
          </h3>

          <h3>
            size:<p>123qm/1323 sqft</p>
          </h3>
        </div>
        <div className="second-line">
          <h3>
            OCCUPANCY:<p>Sleeps 3</p>
          </h3>

          <h3>
            BEDDING:<p>1kings Bed</p>
          </h3>
        </div>
      </div>
      <div>
     <Amenities/>
      </div>
      <div></div>
    </div>
  );
};

export default Rooms;
