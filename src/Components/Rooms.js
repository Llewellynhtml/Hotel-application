import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/dbslice"; 
import './Rooms.css';

const Rooms = () => {
  const { data, error, loading } = useSelector((state) => state.data || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="rooms-section">
      <div className="container">
        <div className="rooms-grid">
          {data.map((room) => (
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
                <div className="room-actions">
                  <button onClick={() => navigate(`/rooms/${room.id}`)} className="view-room-btn">
                    View Room
                  </button>
                  <button onClick={() => navigate(`/book/${room.id}`)} className="book-room-btn">
                    Book Now
                  </button>
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
