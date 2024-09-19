import React from 'react';
import { useParams } from 'react-router-dom';
import { roomData } from './roomData';
import './RoomDetails.css';
import BookingSection from './BookingSection';

const RoomDetails = () => {
  const { id } = useParams();
  const room = roomData.find((room) => room.id === parseInt(id));

  if (!room) {
    return <h2>Room not found</h2>;
  }

  return (
    <section className="room-details-section">
      <div className="container">
        <div className="room-details-card">
          <img src={room.imageLg} alt={room.name} className="room-details-image" />
          <div className="room-details-content">
            <h2 className="room-details-name">{room.name}</h2>
            <p className="room-details-description">{room.description}</p>
            <ul className="room-details-facilities">
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

        
        <BookingSection roomId={room.id} roomName={room.name} roomPrice={room.price} />
      </div>
    </section>
  );
};

export default RoomDetails;
