import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      try {
        const roomRef = doc(db, "Rooms", id);
        const roomSnap = await getDoc(roomRef);
        if (roomSnap.exists()) {
          setRoom({ id: roomSnap.id, ...roomSnap.data() });
        } else {
          setError("Room not found");
        }
      } catch (error) {
        setError("Error fetching room details");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

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
            <p className="room-details-description">
              {room.description || "No description available."}
            </p>
            <ul className="room-details-facilities">
              {room.facilities &&
                room.facilities.map((facility, index) => (
                  <li key={index} className="facility-item">
                    {facility.icon}
                    <span>{facility.name}</span>
                  </li>
                ))}
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
