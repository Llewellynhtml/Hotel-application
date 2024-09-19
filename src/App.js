import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rooms from './Components/Rooms';
import RoomDetails from './Components/RoomDetails';
import BookingSection from './Components/BookingSection';
import Reservation from './Components/Reservation';
import PaymentMethod from './Components/PaymentMethod';
<<<<<<< HEAD
import Signup from './Components/Signup';
import Signin from './Components/signin';
=======
import Signup from './Components/Signup'; // Import Signup
import signin from './Components/signin'; // Import Signin
import Homepage from './Components/Homepage';

>>>>>>> dbddb416f4d75197be7b9f266504af2570212d32
const App = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/book/:id" element={<BookingSection />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/payment" element={<PaymentMethod />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
=======
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
>>>>>>> dbddb416f4d75197be7b9f266504af2570212d32
      </Routes>
    </Router>
  );
};

export default App;
