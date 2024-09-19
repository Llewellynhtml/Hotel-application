import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CurrencyInput from "react-currency-input-field";
import "./booking.css";

function BookingSection({ roomId, roomName, roomPrice }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currency, setCurrency] = useState("");
  const [currencyType, setCurrencyType] = useState("ZAR");

  const navigate = useNavigate();

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 1 && setAdults(adults - 1);
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => children > 0 && setChildren(children - 1);

  const handleReservation = () => {
    // Pass booking data to the reservation page
    navigate(`/reservation`, {
      state: {
        roomId,
        roomName,
        roomPrice,
        startDate,
        endDate,
        adults,
        children,
        currencyType,
        totalPrice: roomPrice * (endDate - startDate) / (1000 * 60 * 60 * 24), // calculate price based on the number of days
      },
    });
  };

  return (
    <div className="booking-container">
      <div className="horizontal-input-group">
        <div className="date-picker-trigger">
          <label>Select Dates:</label>
          <DatePicker
            selected={startDate}
            onChange={(dates) => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown={2}
            dateFormat="dd/MM/yyyy"
            className="date-picker-input"
          />
        </div>

        <div className="guest-input">
          <label>Adults:</label>
          <button onClick={decrementAdults}>-</button>
          <span>{adults}</span>
          <button onClick={incrementAdults}>+</button>
        </div>

        <div className="guest-input">
          <label>Children:</label>
          <button onClick={decrementChildren}>-</button>
          <span>{children}</span>
          <button onClick={incrementChildren}>+</button>
        </div>

        <button className="check-availability" onClick={handleReservation}>
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}

export default BookingSection;
