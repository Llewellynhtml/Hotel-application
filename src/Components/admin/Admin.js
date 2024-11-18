import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import {
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Admin.css";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [error, setError] = useState(null);
  const [newBooking, setNewBooking] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser);
        const userDoc = await getDoc(doc(db, "users", authUser.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchBookings = async () => {
    try {
      const bookingsCollection = await getDocs(collection(db, "bookings"));
      const bookingsData = bookingsCollection.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          startDate: data.startDate ? data.startDate.toDate() : null,
          endDate: data.endDate ? data.endDate.toDate() : null,
        };
      });
      setBookings(bookingsData);
    } catch (err) {
      setError("Failed to fetch bookings");
      console.error(err);
    }
  };

  const fetchRooms = async () => {
    try {
      const roomsCollection = await getDocs(collection(db, "Rooms"));
      const roomsData = roomsCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(roomsData);
    } catch (err) {
      setError("Failed to fetch rooms");
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchBookings();
      fetchRooms();
    }
  }, [isAdmin]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "overview" || tabName === "manage-bookings") {
      fetchBookings();
    }
  };

  const handleDeleteBooking = async (id) => {
    try {
      await deleteDoc(doc(db, "bookings", id));
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (err) {
      setError("Failed to delete booking");
    }
  };

  const handleUpdateBooking = async (id, updatedData) => {
    try {
      await updateDoc(doc(db, "bookings", id), updatedData);
      setBookings(
        bookings.map((booking) =>
          booking.id === id ? { ...booking, ...updatedData } : booking
        )
      );
    } catch (err) {
      setError("Failed to update booking");
    }
  };

  const handleNewBookingSubmit = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }

    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // milliseconds to days
    if (totalDays <= 0) {
      setError("End date must be after start date.");
      return;
    }

    const calculatedTotalPrice = totalDays * (newBooking.roomPrice || 0);

    try {
      const bookingRef = await addDoc(collection(db, "bookings"), {
        ...newBooking,
        startDate: Timestamp.fromDate(startDate),
        endDate: Timestamp.fromDate(endDate),
        totalPrice: calculatedTotalPrice,
        createdAt: Timestamp.now(),
      });
      setBookings([
        ...bookings,
        { id: bookingRef.id, ...newBooking, startDate, endDate, totalPrice: calculatedTotalPrice },
      ]);
      setNewBooking({});
      setStartDate(null);
      setEndDate(null);
      setShowDatePicker(false);
      setError(null); // Reset error after successful submission
    } catch (err) {
      setError("Failed to add booking");
    }
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul className="sidebar-nav">
          <li className={activeTab === "overview" ? "active" : ""} onClick={() => handleTabClick("overview")}>
            Overview
          </li>
          <li className={activeTab === "manage-bookings" ? "active" : ""} onClick={() => handleTabClick("manage-bookings")}>
            Manage Bookings
          </li>
          <li className={activeTab === "add-booking" ? "active" : ""} onClick={() => handleTabClick("add-booking")}>
            Add Booking
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="admin-header">
          <h1>Welcome, {user ? user.email : "Admin"}</h1>
        </header>

        <section className="content-section">
          {activeTab === "overview" && (
            <div className="dashboard-overview">
              <h2>Overview</h2>
              <p>Total Bookings: {bookings.length}</p>
            </div>
          )}

          {activeTab === "manage-bookings" && (
            <div className="manage-bookings">
              <h2>Manage Bookings</h2>
              {error && <p className="error">{error}</p>}
              {bookings.length > 0 ? (
                <table className="bookings-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Room Name</th>
                      <th>Room Image</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Room Price</th>
                      <th>Total Price</th>
                      <th>Adults</th>
                      <th>Children</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td>{booking.id}</td>
                        <td>{booking.title}</td>
                        <td>{booking.firstName}</td>
                        <td>{booking.lastName}</td>
                        <td>{booking.roomName}</td>
                        <td>
                          <img src={booking.roomImage} alt={booking.roomName} style={{ width: '100px', height: 'auto' }} />
                        </td>
                        <td>{booking.startDate ? booking.startDate.toLocaleDateString() : "N/A"}</td>
                        <td>{booking.endDate ? booking.endDate.toLocaleDateString() : "N/A"}</td>
                        <td>{booking.roomPrice}</td>
                        <td>{booking.adults}</td>
                        <td>{booking.children}</td>
                        <td>{booking.totalPrice}</td>
                        <td>
                          <button onClick={() => handleUpdateBooking(booking.id, { ...booking, status: "updated" })}>
                            Update
                          </button>
                          <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No bookings found</p>
              )}
            </div>
          )}

          {activeTab === "add-booking" && (
            <div className="add-booking">
              <h2>Add New Booking</h2>
              <form onSubmit={handleNewBookingSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newBooking.title || ""}
                  onChange={handleBookingChange}
                  required
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={newBooking.firstName || ""}
                  onChange={handleBookingChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={newBooking.lastName || ""}
                  onChange={handleBookingChange}
                  required
                />

                <select
                  name="roomName"
                  value={newBooking.roomName || ""}
                  onChange={(e) => {
                    handleBookingChange(e);
                    const selectedRoom = rooms.find((room) => room.name === e.target.value);
                    if (selectedRoom) {
                      setNewBooking((prev) => ({
                        ...prev,
                        roomPrice: selectedRoom.price,
                        roomImage: selectedRoom.image,
                      }));
                    }
                  }}
                  required
                >
                  <option value="">Select Room</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.name}>
                      {room.name}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  name="roomPrice"
                  placeholder="Room Price"
                  value={newBooking.roomPrice || ""}
                  readOnly // Prevent manual changes
                />

                <input
                  type="number"
                  name="adults"
                  placeholder="Number of Adults"
                  value={newBooking.adults || ""}
                  onChange={handleBookingChange}
                  required
                />

                <input
                  type="number"
                  name="children"
                  placeholder="Number of Children"
                  value={newBooking.children || ""}
                  onChange={handleBookingChange}
                />

                <div className="date-picker-container">
                  <label className="date-picker-label">Select Dates:</label>
                  <button
                    type="button"
                    className="toggle-date-picker-btn"
                    onClick={() => setShowDatePicker((prev) => !prev)}
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
                        inline
                        dateFormat="dd/MM/yyyy"
                        isClearable
                      />
                    </div>
                  )}
                </div>

                <div>
                  <input
                    type="number"
                    name="totalPrice"
                    placeholder="Total Price"
                    value={newBooking.roomPrice && startDate && endDate
                      ? (Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) * newBooking.roomPrice)
                      : ""}
                    readOnly // Prevent manual changes
                  />
                </div>

                <button type="submit" className="add-btn">
                  Submit Booking
                </button>
              </form>
              {error && <p className="error">{error}</p>}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Admin;
