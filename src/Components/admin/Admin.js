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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser);
        const userDoc = await getDoc(doc(db, "users", authUser.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);

          const bookingDocs = await getDocs(collection(db, "bookings"));
          const fetchedBookings = bookingDocs.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data,
              startDate: data.startDate instanceof Timestamp 
                ? data.startDate.toDate().toLocaleDateString() 
                : data.startDate, // Fallback if not a Timestamp
              endDate: data.endDate instanceof Timestamp 
                ? data.endDate.toDate().toLocaleDateString() 
                : data.endDate, // Fallback if not a Timestamp
            };
          });
          setBookings(fetchedBookings);
        } else {
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "bookings", id));
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const handleUpdate = async (id, updatedData) => {
    await updateDoc(doc(db, "bookings", id), updatedData);
  };

  const handleAddBooking = async (newBooking) => {
    try {
      const bookingData = {
        ...newBooking,
        startDate: Timestamp.fromDate(new Date(newBooking.startDate)), // Convert string to Timestamp
        endDate: Timestamp.fromDate(new Date(newBooking.endDate)),     // Convert string to Timestamp
      };
      const docRef = await addDoc(collection(db, "bookings"), bookingData);
      setBookings([...bookings, { id: docRef.id, ...bookingData }]);
    } catch (error) {
      console.error("Error adding booking: ", error);
    }
  };

  if (!user) {
    return <p>Please log in to access admin features</p>;
  }

  if (!isAdmin) {
    return <p>You do not have the necessary permissions to access this page</p>;
  }

  return (
    <div className="admin-container">
      <h1>Welcome Admin, {user.email}</h1>
      <p>Here you can manage the hotel booking system.</p>
      <div className="booking-list">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <p>Client Name: {booking.clientName}</p>
              <p>Surname: {booking.surname}</p>
              <p>Room Name: {booking.roomName}</p>
              <p>Room Price: {booking.roomPrice}</p>
              <p>Start Date: {booking.startDate}</p>
              <p>End Date: {booking.endDate}</p>
              <p>Adults: {booking.adults}</p>
              <p>Children: {booking.children}</p>
              <p>Total Price: {booking.totalPrice}</p>
              <div className="button-group">
                <button
                  className="view-button"
                  onClick={() => alert(JSON.stringify(booking, null, 2))}
                >
                  View Booking
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(booking.id)}
                >
                  Delete Booking
                </button>
                <button
                  className="update-button"
                  onClick={() =>
                    handleUpdate(booking.id, { roomName: "Updated Room" })
                  }
                >
                  Update Booking
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No bookings available</p>
        )}
      </div>
      <AdminForm addBooking={handleAddBooking} />
    </div>
  );
};

export default Admin;
