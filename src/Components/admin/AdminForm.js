import React, { useState, useEffect } from "react";
import './AdminForm.css'; // Import AdminForm CSS

const AdminForm = ({ addBooking, selectedBooking, updateBooking, isEditing, setShowModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    roomName: "",
    roomPrice: "",
    startDate: "",
    endDate: "",
    adults: "",
    children: "",
    totalPrice: "",
  });

  useEffect(() => {
    if (isEditing && selectedBooking) {
      setFormData(selectedBooking);
    }
  }, [isEditing, selectedBooking]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateBooking(formData); 
    } else {
      addBooking(formData); 
    }
    setFormData({ 
      firstName: "",
      lastName: "",
      roomName: "",
      roomPrice: "",
      startDate: "",
      endDate: "",
      adults: "",
      children: "",
      totalPrice: "",
    });
    setShowModal(false); 
  };

  return (
    <div className="admin-form-container">
      <h2>{isEditing ? "Edit Booking" : "Add Booking"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="roomName">Room Name</label>
          <input
            type="text"
            name="roomName"
            id="roomName"
            value={formData.roomName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="roomPrice">Room Price</label>
          <input
            type="number"
            name="roomPrice"
            id="roomPrice"
            value={formData.roomPrice}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="adults">Adults</label>
          <input
            type="number"
            name="adults"
            id="adults"
            value={formData.adults}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="children">Children</label>
          <input
            type="number"
            name="children"
            id="children"
            value={formData.children}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="totalPrice">Total Price</label>
          <input
            type="number"
            name="totalPrice"
            id="totalPrice"
            value={formData.totalPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="modal-buttons">
          <button type="submit" className="save-button">
            {isEditing ? "Save Changes" : "Submit Booking"}
          </button>
          <button
            type="button"
            className="close-button"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
