import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/dbslice";
import "./Rooms.css";

const Rooms = () => {
  const { data = [], error, loading } = useSelector((state) => state.db);
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
          {data.map((Rooms) => (
            <div className="room-card" key={Rooms.id}>
              <img src={Rooms.image} alt={Rooms.name} className="room-image" />
              <div className="room-details">
                <h3 className="room-name">{Rooms.name}</h3>
                <p className="room-description">{Rooms.description}</p>
                <ul className="room-facilities">
                  {Rooms.facilities?.map((facility, index) => (
                    <li key={index}>
                      {facility.icon} {facility.name}
                    </li>
                  ))}
                </ul>
                <div className="room-info">
                  <p>Size: {Rooms.size} m²</p>
                  <p>Max Persons: {Rooms.maxPerson}</p>
                  <p className="room-price">${Rooms.price} / night</p>
                </div>
                <div className="room-actions">
                  <button
                    onClick={() => navigate(`/rooms/${Rooms.id}`)}
                    className="view-room-btn"
                  >
                    View Room
                  </button>

                  <button
                    onClick={() => navigate(`/book/${Rooms.id}`)}
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
