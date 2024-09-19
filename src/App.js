import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rooms from './Components/Rooms';
import RoomDetails from './Components/RoomDetails';
import BookingSection from './Components/BookingSection';
import Reservation from './Components/Reservation';
import PaymentMethod from './Components/PaymentMethod';
import Signup from './Components/Signup'; // Import Signup
import signin from './Components/signin'; // Import Signin
import Homepage from './Components/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for the existing components */}
        <Route path="/" element={<HomePage />} /> {/* HomePage route */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/book/:id" element={<BookingSection />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/payment" element={<PaymentMethod />} />

        {/* Define routes for Signup and Signin */}
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        <Route path="/signin" element={<signin />} /> {/* Signin route */}
      </Routes>
    </Router>
  );
};

export default App;
