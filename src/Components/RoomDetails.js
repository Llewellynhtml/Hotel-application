import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import "./RoomDetails.css";
import BookingSection from "./BookingSection";

const RoomDetails = () => {
  const { id } = useParams(); // Get room ID from the URL
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      console.log("Fetching room with ID:", id);
      try {
        const roomRef = doc(db, "Rooms", id); // Reference to the room in Firestore
        const roomSnap = await getDoc(roomRef); // Fetch the room data
        if (roomSnap.exists()) {
          console.log("Room data:", roomSnap.data());
          setRoom({ id: roomSnap.id, ...roomSnap.data() }); // Set room data in state
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
    return <h2>Loading...</h2>; // Show loading spinner or text
  }

  if (error) {
    return <h2>{error}</h2>; // Show error message if any
  }

  if (!room) {
    return <h2>Room not found</h2>; // Show error if room is not found
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
          roomId={room.id} // Pass room ID to BookingSection
          roomName={room.name} // Pass room name to BookingSection
          roomPrice={room.price} // Pass room price to BookingSection
        />
      </div>
    </section>
  );
};

export default RoomDetails;
