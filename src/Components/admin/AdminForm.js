import React, { useState } from "react";
import './AdminForm.css'; // Import AdminForm CSS

const AdminForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    surname: "",
    roomName: "",
    roomPrice: "",
    startDate: "",
    endDate: "",
    adults: "",
    children: "",
    totalPrice: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the addBooking function with form data
    addBooking(formData);
    // Optionally reset the form after submission
    setFormData({
      clientName: "",
      surname: "",
      roomName: "",
      roomPrice: "",
      startDate: "",
      endDate: "",
      adults: "",
      children: "",
      totalPrice: "",
    });
  };

  return (
    <div className="admin-form-container">
      <h2>Add or Update Booking</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="roomName"
          placeholder="Room Name"
          value={formData.roomName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="roomPrice"
          placeholder="Room Price"
          value={formData.roomPrice}
          onChange={handleChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={formData.endDate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="adults"
          placeholder="Adults"
          value={formData.adults}
          onChange={handleChange}
        />
        <input
          type="number"
          name="children"
          placeholder="Children"
          value={formData.children}
          onChange={handleChange}
        />
        <input
          type="number"
          name="totalPrice"
          placeholder="Total Price"
          value={formData.totalPrice}
          onChange={handleChange}
        />
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default AdminForm;
