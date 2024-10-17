import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./booking.css";

function BookingSection({ roomId, roomName, roomPrice }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

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
    setShowDatePicker(false); // Hide DatePicker after selecting the range
  };

  const handleReservation = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }
    
    // const numberOfDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    // if (numberOfDays <= 0) {
    //   alert("End date must be after start date.");
    //   return;
    // }
    const calculateDaysBooked = (inDate, outDate) => {
      const checkIn = new Date(inDate);
      const checkOut = new Date(outDate);
      const timeDiff = Math.abs(checkOut - checkIn);
      return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    };
    const numberOfDays = calculateDaysBooked(startDate, endDate);
    // const totalPrice = totalDays * room.price;

    const totalPrice = parseInt(roomPrice) * parseInt(numberOfDays);
console.log("room-price:", typeof roomPrice)
console.log("days:", typeof numberOfDays)
console.log("total-price", typeof totalPrice)
    navigate(`/reservation`, {
      state: {
        roomId,
        roomName,
        roomPrice,
        startDate,
        endDate,
        adults,
        children,
        totalPrice,
      },
    });
  };

  return (
    <div className="booking-container">
      <div className="horizontal-input-group">
        <div className="date-picker-trigger">
          <label>Select Dates:</label>
          <button
            className="toggle-date-picker-btn"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            {startDate && endDate
              ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
              : "Select Dates"}
          </button>

          {showDatePicker && (
            <div className="date-picker-dropdown">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                monthsShown={2}
                inline
                dateFormat="dd/MM/yyyy"
              />
            </div>
          )}
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
