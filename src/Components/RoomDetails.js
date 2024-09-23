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

  useEffect(() => {
    const fetchRoomDetails = async () => {
      console.log("Fetching room with ID:", id);
      try {
        const roomRef = doc(db, "Rooms", id);  
        const roomSnap = await getDoc(roomRef);  
        if (roomSnap.exists()) {
          console.log("Room data:", roomSnap.data());
          setRoom({ id: roomSnap.id, ...roomSnap.data() });  
          setLoading(false);
        } else {
          setError("Room not found");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
        setError("Error fetching room details");
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
            src={room.image || "default-image-url.jpg"}  
            alt={room.name || "Room"} 
            className="room-details-image"
          />
          <div className="room-details-content">
            <h2 className="room-details-name">{room.name || "Room Name"}</h2>  
            <p className="room-details-description">{room.description || "No description available."}</p>
            <ul className="room-details-facilities">
            
            </ul>
            <div className="room-info">
              <p>Size: {room.size || "N/A"} m²</p>  
              <p>Max Persons: {room.maxPerson || "N/A"}</p> 
              <p className="room-price">R{room.price || "N/A"} / night</p>  
            </div>
          </div>
        </div>

        <BookingSection
          roomId={room.id || "N/A"}  
          roomName={room.name || "N/A"}  
          roomPrice={room.price || 0}  
        />
      </div>
    </section>
  );
};

export default RoomDetails;
