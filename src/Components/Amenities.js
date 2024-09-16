import React from 'react';
// Import Material-UI Icons
import BalconyIcon from '@mui/icons-material/Balcony';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import WeekendIcon from '@mui/icons-material/Weekend'; // For Sitting Area
import HotelIcon from '@mui/icons-material/Hotel'; // For Beds
import ShowerIcon from '@mui/icons-material/Shower';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalBarIcon from '@mui/icons-material/LocalBar'; // For MiniBar
import RoomServiceIcon from '@mui/icons-material/RoomService';
import WifiIcon from '@mui/icons-material/Wifi';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker'; // For Tea/Coffee
import TvIcon from '@mui/icons-material/Tv';
import CableIcon from '@mui/icons-material/Cable'; // For Satellite or Cable
import DryCleaningIcon from '@mui/icons-material/DryCleaning'; // For Hair Dryer
import './Amenities.css';

const Amenities = () => {
  return (
    <div className='Amenities'>
      <div>
        <BalconyIcon style={{ fontSize: 40 }} />
        <p>Balcony</p>
      </div>
      <div>
        <FreeBreakfastIcon style={{ fontSize: 40 }} />
        <p>Breakfast</p>
      </div>
      <div>
        <WeekendIcon style={{ fontSize: 40 }} />
        <p>Sitting Area</p>
      </div>
      <div>
        <ShowerIcon style={{ fontSize: 40 }} />
        <p>Shower</p>
      </div>
      <div>
        <BathtubIcon style={{ fontSize: 40 }} />
        <p>Bath</p>
      </div>
      <div>
        <HotelIcon style={{ fontSize: 40 }} />
        <p>Double Queen Bed</p>
      </div>
      <div>
        <HotelIcon style={{ fontSize: 40 }} />
        <p>King Size Bed</p>
      </div>
      <div>
        <LocalBarIcon style={{ fontSize: 40 }} />
        <p>MiniBar</p>
      </div>
      <div>
        <RoomServiceIcon style={{ fontSize: 40 }} />
        <p>Room Service</p>
      </div>
      <div>
        <RoomServiceIcon style={{ fontSize: 40 }} />
        <p>24 Hours Room Service</p>
      </div>
      <div>
        <WifiIcon style={{ fontSize: 40 }} />
        <p>WiFi</p>
      </div>
      <div>
        <CoffeeMakerIcon style={{ fontSize: 40 }} />
        <p>Tea/Coffee</p>
      </div>
      <div>
        <TvIcon style={{ fontSize: 40 }} />
        <p>TV</p>
      </div>
      <div>
        <CableIcon style={{ fontSize: 40 }} />
        <p>Satellite or Cable</p>
      </div>
      <div>
        <DryCleaningIcon style={{ fontSize: 40 }} />
        <p>Hair Dryer</p>
      </div>
    </div>
  );
};

export default Amenities;
