import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CurrencyInput from "react-currency-input-field";
import "./booking.css";


function BookingSection() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currency, setCurrency] = useState("");
  const [currencyType, setCurrencyType] = useState("ZAR");

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 1 && setAdults(adults - 1);
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => children > 0 && setChildren(children - 1);

  return (
    <div className="booking-container">
      <div className="horizontal-input-group">
        <div className="date-picker-trigger">
          <label>Select Dates:</label>
          <select
            onFocus={() => setShowDatePicker(true)}
            onBlur={() => setShowDatePicker(false)}
            className="date-picker-dropdown"
          >
            <option value="">Check-in / Check-out</option>
          </select>

          {showDatePicker && (
            <div className="date-picker-currency">
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
              <div className="currency-input">
                <label htmlFor="currency">Currency:</label>
                <select
                  value={currencyType}
                  onChange={(e) => setCurrencyType(e.target.value)}
                  className="currency-select"
                >
                  <option value="ZAR">ZAR - South African Rand</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                </select>
                <CurrencyInput
                  id="currency-input"
                  name="currency"
                  placeholder="Enter amount"
                  decimalsLimit={2}
                  onValueChange={(value) => setCurrency(value)}
                  prefix={currencyType === "ZAR" ? "R" : ""}
                />
              </div>
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

        <button className="check-availability">Check Availability</button>
      </div>
    </div>
  );
}

export default BookingSection;
