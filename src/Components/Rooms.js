import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../Redux/dbslice";
import "./Rooms.css";
import { FaHeart, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 

const Rooms = () => {
  const { data, error, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likes, setLikes] = useState({}); // Track likes for each room
  const [showShareOptions, setShowShareOptions] = useState({}); // Track share options visibility for each room

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const handleLike = (roomId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [roomId]: !prevLikes[roomId], // Toggle like for specific room
    }));
  };

  const handleShare = (roomId) => {
    setShowShareOptions((prevShareOptions) => ({
      ...prevShareOptions,
      [roomId]: !prevShareOptions[roomId], // Toggle share icons for specific room
    }));
  };

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
      <h1 className="Marina">Marina Rise Rooms</h1>
      <div className="container">
        <div className="rooms-grid">
          {data.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} className="room-image" />
              <div className="room-details">
                <h3 className="room-name">{room.name}</h3>
                <div className="room-info">
                  <p>Max Persons: {room.maxPerson}</p>
                  <p className="room-price">R{room.price} / night</p>
                </div>
                <div className="room-actions">
                  <button
                    onClick={() => navigate(`/rooms/${room.id}`)}
                    className="view-room-btn"
                  >
                    View Room
                  </button>

                  <button
                    onClick={() => navigate(`/book/${room.id}`)}
                    className="book-room-btn"
                  >
                    Book Now
                  </button>
                </div>

                {/* Heart and Share Buttons */}
                <div className="interactive-actions">
                  <span
                    className={`heart-icon ${likes[room.id] ? "liked" : ""}`}
                    onClick={() => handleLike(room.id)}
                  >
                    {likes[room.id] ? "❤️" : "🤍"}
                  </span>

                  {/* Share Button */}
                  <button className="share-btn" onClick={() => handleShare(room.id)}>
                    Share
                  </button>

                  {/* Social Media Icons */}
                  {showShareOptions[room.id] && (
                    <div className="share-icons">
                      <FaFacebook className="social-icon" />
                      <FaTwitter className="social-icon" /> {/* Twitter icon */}
                      <FaInstagram className="social-icon" />
                    </div>
                  )}
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
