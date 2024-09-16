
import React from "react";
import { useParams } from "react-router-dom";

const suiteData = {
  suite1: { name: "Royal Suite", description: "Exclusive royal suite with a grand view.", price: "$800 per night" },
  suite2: { name: "Presidential Suite", description: "Top-of-the-line suite with premium amenities.", price: "$1000 per night" },
  suite3: { name: "Executive Suite", description: "Suite designed for business executives.", price: "$600 per night" },
  suite4: { name: "Luxury Suite", description: "A luxurious suite for a lavish experience.", price: "$750 per night" },
  suite5: { name: "Honeymoon Suite", description: "Romantic suite perfect for couples.", price: "$900 per night" },
  suite6: { name: "Premier Suite", description: "Spacious suite with deluxe features.", price: "$850 per night" },
};

function SuitePage() {
  const { suiteId } = useParams();
  const suite = suiteData[suiteId];

  if (!suite) {
    return <p>Suite not found!</p>;
  }

  return (
    <div className="suite-page">
      <h2>{suite.name}</h2>
      <p>{suite.description}</p>
      <p>Price: {suite.price}</p>
    </div>
  );
}

export default SuitePage;
