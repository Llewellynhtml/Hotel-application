import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { doc, getDoc, deleteDoc, updateDoc, collection, addDoc, getDocs } from "firebase/firestore";
import AdminForm from "./AdminForm"; 
import './Admin.css';  
import { Timestamp } from "firebase/firestore";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("overview"); // Track active tab
  const [error, setError] = useState(null); // Handle errors
  const [newBooking, setNewBooking] = useState({}); // Handle new bookings

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

  // Fetch bookings from Firestore
  const fetchBookings = async () => {
    try {
      const bookingsCollection = await getDocs(collection(db, "bookings"));
      const bookingsData = bookingsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(bookingsData);
    } catch (err) {
      setError("Failed to fetch bookings");
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchBookings(); // Fetch bookings if user is admin
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
      setBookings(bookings.map(booking => booking.id === id ? { ...booking, ...updatedData } : booking));
    } catch (err) {
      setError("Failed to update booking");
    }
  };

  const handleNewBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingRef = await addDoc(collection(db, "bookings"), {
        ...newBooking,
        createdAt: Timestamp.now(),
      });
      setBookings([...bookings, { id: bookingRef.id, ...newBooking }]);
      setNewBooking({});
    } catch (err) {
      setError("Failed to add booking");
    }
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul className="sidebar-nav">
          <li className={activeTab === "overview" ? "active" : ""} onClick={() => handleTabClick("overview")}>Overview</li>
          <li className={activeTab === "manage-bookings" ? "active" : ""} onClick={() => handleTabClick("manage-bookings")}>Manage Bookings</li>
          <li className={activeTab === "add-booking" ? "active" : ""} onClick={() => handleTabClick("add-booking")}>Add Booking</li>
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
                      <th>Name</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td>{booking.id}</td>
                        <td>{booking.title}</td>
                        <td>{booking.name}</td>
                        <td>{booking.price}</td>
                        <td>
                          <button onClick={() => handleUpdateBooking(booking.id, { ...booking, status: "updated" })}>Update</button>
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
                  placeholder="Booking Title"
                  value={newBooking.title || ""}
                  onChange={handleBookingChange}
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={newBooking.name || ""}
                  onChange={handleBookingChange}
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={newBooking.price || ""}
                  onChange={handleBookingChange}
                  required
                />
                <button type="submit" className="add-btn">Submit Booking</button>
              </form>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Admin;
