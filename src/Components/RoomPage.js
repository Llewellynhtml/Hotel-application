
import React from "react";
import { useParams } from "react-router-dom";

const roomData = {
  room1: { name: "Deluxe Room", description: "Spacious deluxe room with sea view.", price: "$200 per night" },
  room2: { name: "Standard Room", description: "Cozy room with all basic amenities.", price: "$150 per night" },
  room3: { name: "Family Room", description: "Large room suitable for families.", price: "$250 per night" },
  room4: { name: "Suite Room", description: "Luxurious suite with a private balcony.", price: "$300 per night" },
  room5: { name: "Business Room", description: "Ideal for business travelers.", price: "$180 per night" },
  room6: { name: "Single Room", description: "Perfect for solo travelers.", price: "$100 per night" },
  room7: { name: "Garden Room", description: "Room with garden view.", price: "$220 per night" },
  room8: { name: "Poolside Room", description: "Room next to the pool.", price: "$250 per night" },
  room9: { name: "Penthouse Room", description: "Premium room on the top floor.", price: "$500 per night" },
  room10: { name: "Double Room", description: "Room with two beds.", price: "$180 per night" },
};

function RoomPage() {
  const { roomId } = useParams();
  const room = roomData[roomId];

  if (!room) {
    return <p>Room not found!</p>;
  }

  return (
    <div className="room-page">
      <h2>{room.name}</h2>
      <p>{room.description}</p>
      <p>Price: {room.price}</p>
    </div>
  );
}

export default RoomPage;
