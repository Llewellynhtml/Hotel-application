import React from 'react';
import { roomData  } from './roomData'; // Import data instead of roomData
import './Rooms.css'; // Import CSS for styling

const Rooms = () => {
  return (
    <section className="rooms-section">
      <div className="container">
        <div className="rooms-grid">
          {roomData.map((room) => (
            <div className="room-card" key={room.id}>
              <img src={room.image} alt={room.name} className="room-image" />
              <div className="room-details">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-description">{room.description}</p>
                <ul className="room-facilities">
                  {room.facilities.map((facility, index) => (
                    <li key={index}>
                      {facility.icon} {facility.name}
                    </li>
                  ))}
                </ul>
                <div className="room-info">
                  <p>Size: {room.size} m²</p>
                  <p>Max Persons: {room.maxPerson}</p>
                  <p className="room-price">${room.price} / night</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
