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

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    if (start && end && start > end) {
      alert("End date must be after start date.");
      return;
    }
    setStartDate(start);
    setEndDate(end);
  };

  const handleReservation = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }
    
    const numberOfDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    if (numberOfDays <= 0) {
      alert("End date must be after start date.");
      return;
    }

    const totalPrice = roomPrice * numberOfDays;

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
        totalPrice,
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
            onChange={handleDateChange}
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
