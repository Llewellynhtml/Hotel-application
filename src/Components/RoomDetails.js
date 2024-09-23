import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import "./RoomDetails.css";
import BookingSection from "./BookingSection";

const RoomDetails = () => {
  const { id } = useParams(); 
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      console.log("Fetching room with ID:", id);
      try {
        const roomRef = doc(db, "Rooms", id); 
        const roomSnap = await getDoc(roomRef); 

        if (roomSnap.exists()) {
          console.log("Room data:", roomSnap.data());
          setRoom({ id: roomSnap.id, ...roomSnap.data() }); // Set room data in state
        } else {
          setError("Room not found");
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
        setError("Error fetching room details");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>; 
  }

  if (!room) {
    return <h2>Room not found</h2>; 
  }

  return (
    <section className="room-details-section">
      <div className="container">
        <div className="room-details-card">
          <img
            src={room.imageLg} // Large room image
            alt={room.name}
            className="room-details-image"
          />
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

        <BookingSection
          roomId={room.id}
          roomName={room.name} 
          roomPrice={room.price} 
        />
      </div>
    </section>
  );
};

export default RoomDetails;
