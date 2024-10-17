import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./reservation.css";

const Reservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { roomName, roomPrice, startDate, endDate, adults, children, currencyType, totalPrice } = location.state;
  console.log("Total:t",totalPrice)

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("South Africa");
  const [city, setCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [arrivalFlight, setArrivalFlight] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureFlight, setDepartureFlight] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservationDetails = {
      title,
      firstName,
      lastName,
      email,
      confirmEmail,
      telephone,
      country,
      city,
      address1,
      address2,
      zipCode,
      arrivalFlight,
      arrivalDate,
      arrivalTime,
      departureFlight,
      departureDate,
      departureTime,
      specialRequests,
      roomName,
      totalPrice,
      currencyType,
    };

    console.log("Reservation Submitted: ", reservationDetails);

    // Navigate to Payment page after reservation
    navigate("/payment", {
      state: { title, firstName, lastName, email, confirmEmail, telephone, country, city, address1, zipCode, roomName, totalPrice, startDate, endDate,adults, children, roomPrice,  },
    });
  };

  return (
    <div className="reservation-summary">
      <h2>Reservation Summary</h2>
      <div className="summary-details">
        <p><strong>Room:</strong> {roomName}</p>
        <p><strong>Check-in Date:</strong> {startDate?.toLocaleDateString()}</p>
        <p><strong>Check-out Date:</strong> {endDate?.toLocaleDateString()}</p>
        <p><strong>Adults:</strong> {adults}</p>
        <p><strong>Children:</strong> {children}</p>
        <p><strong>Price per Night:</strong> {currencyType} {roomPrice}</p>
        <p><strong>Total Price:</strong> {currencyType} {totalPrice.toFixed(2)}</p>
      </div>

      <div className="reservation-info">
        <h2>Reservation Information</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label>
            Title:
            <select value={title} onChange={(e) => setTitle(e.target.value)} required>
              <option value="" disabled>Select title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
            </select>
          </label>

          <label>
            First Name*:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </label>

          <label>
            Last Name*:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </label>

          <label>
            Email*:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Confirm Email*:
            <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
          </label>

          <label>
            Telephone Number*:
            <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
          </label>

          <label>
            Country of Residence*:
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
          </label>

          <label>
            City*:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </label>

          <label>
            Address 1*:
            <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
          </label>

          <label>
            Address 2:
            <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} />
          </label>

          <label>
            Zip Code or Post Code*:
            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
          </label>

          <button type="submit">Submit Reservation</button>
        </form>
      </div>

      <div className="flight-info">
        <h3>Flight Information</h3>

        <div className="flight-details">
          <label>
            Flight Arrival Details:
            <input type="text" placeholder="Flight Number" value={arrivalFlight} onChange={(e) => setArrivalFlight(e.target.value)} />
          </label>
          <div>
            <input type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
            <input type="time" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />
          </div>
        </div>

        <div className="flight-details">
          <label>
            Flight Departure Details:
            <input type="text" placeholder="Flight Number" value={departureFlight} onChange={(e) => setDepartureFlight(e.target.value)} />
          </label>
          <div>
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
            <input type="time" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
          </div>
        </div>

        <label className="special-requests">
          Special Requests:
          <textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
        </label>
      </div>
    </div>
  );
};

export default Reservation;
