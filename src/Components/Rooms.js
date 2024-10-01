import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/dbslice";
import "./Rooms.css";

const Rooms = () => {
  const { data, error, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);
  console.log(loading);
  console.log(error);

  useEffect(() => {
    console.log("Data in Rooms component: ", data);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No rooms available</div>;
  }

  return (
    <section className="rooms-section">
      <div className="container">
        <div className="rooms-grid">
          {data.map((rooms, index) => (
            <div className="room-card" key={index}>
              <img src={rooms.image} alt={rooms.name} className="room-image" />
              <div className="room-details">
                <h3 className="room-name">{rooms.name}</h3>
                <p className="room-description">{rooms.description}</p>
                <ul className="room-facilities">
                  {Rooms.facilities?.map((facility, index) => (
                    <li key={index}>
                      {facility.icon} {facility.name}
                    </li>
                  ))}
                </ul>
                <div className="room-info">
                  <p>Size: {rooms.size} m²</p>
                  <p>Max Persons: {rooms.maxPerson}</p>
                  <p className="room-price">R{rooms.price} / night</p>
                </div>
                <div className="room-actions">
                <button
  onClick={() => navigate(`/rooms/${rooms.id}`)} 
  className="view-room-btn"
>
  View Room
</button>

<button
  onClick={() => navigate(`/book/${rooms.id}`)} 
  className="book-room-btn"
>
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
