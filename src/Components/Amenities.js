import React from 'react';
import BalconyIcon from '@mui/icons-material/Balcony';  // Balcony
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';  // Breakfast
import WeekendIcon from '@mui/icons-material/Weekend';  // Sitting Area
import HotelIcon from '@mui/icons-material/Hotel';  // Beds
import ShowerIcon from '@mui/icons-material/Shower';  // Shower
import BathtubIcon from '@mui/icons-material/Bathtub';  // Bath
import LocalBarIcon from '@mui/icons-material/LocalBar';  // MiniBar
import RoomServiceIcon from '@mui/icons-material/RoomService';  // Room Service
import WifiIcon from '@mui/icons-material/Wifi';  // WiFi
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';  // Tea/Coffee
import TvIcon from '@mui/icons-material/Tv';  // TV
import CableIcon from '@mui/icons-material/Cable';  // Satellite or Cable
import DryCleaningIcon from '@mui/icons-material/DryCleaning';  // Hair Dryer

import './Amenities.css'; // Add your CSS file

const Amenities = () => {
  return (
    <div className="amenities-grid">
      <div className="amenity-item">
        <BalconyIcon style={{ fontSize: 40 }} />
        <p>Balcony</p>
      </div>
      <div className="amenity-item">
        <FreeBreakfastIcon style={{ fontSize: 40 }} />
        <p>Breakfast</p>
      </div>
      <div className="amenity-item">
        <WeekendIcon style={{ fontSize: 40 }} />
        <p>Sitting Area</p>
      </div>
      <div className="amenity-item">
        <ShowerIcon style={{ fontSize: 40 }} />
        <p>Shower</p>
      </div>
      <div className="amenity-item">
        <BathtubIcon style={{ fontSize: 40 }} />
        <p>Bath</p>
      </div>
      <div className="amenity-item">
        <HotelIcon style={{ fontSize: 40 }} />
        <p>Double Queen Bed</p>
      </div>
      <div className="amenity-item">
        <HotelIcon style={{ fontSize: 40 }} />
        <p>King Size Bed</p>
      </div>
      <div className="amenity-item">
        <LocalBarIcon style={{ fontSize: 40 }} />
        <p>MiniBar</p>
      </div>
      <div className="amenity-item">
        <RoomServiceIcon style={{ fontSize: 40 }} />
        <p>Room Service</p>
      </div>
      <div className="amenity-item">
        <RoomServiceIcon style={{ fontSize: 40 }} />
        <p>24 Hours Room Service</p>
      </div>
      <div className="amenity-item">
        <WifiIcon style={{ fontSize: 40 }} />
        <p>WiFi</p>
      </div>
      <div className="amenity-item">
        <CoffeeMakerIcon style={{ fontSize: 40 }} />
        <p>Tea/Coffee</p>
      </div>
      <div className="amenity-item">
        <TvIcon style={{ fontSize: 40 }} />
        <p>TV</p>
      </div>
      <div className="amenity-item">
        <CableIcon style={{ fontSize: 40 }} />
        <p>Satellite or Cable</p>
      </div>
      <div className="amenity-item">
        <DryCleaningIcon style={{ fontSize: 40 }} />
        <p>Hair Dryer</p>
      </div>
    </div>
  );
};

export default Amenities;
