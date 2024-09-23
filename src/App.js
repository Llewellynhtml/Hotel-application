import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rooms from './Components/Rooms';
import RoomDetails from './Components/RoomDetails';
import BookingSection from './Components/BookingSection';
import Reservation from './Components/Reservation';
import PaymentMethod from './Components/PaymentMethod';
import Signup from './Components/Signup'; 
import signin from './Components/signin';
import HomePage from './Components/Homepage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/accommodation/rooms" element={<Rooms />} /> 
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/book/:id" element={<BookingSection />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signin" element={<signin />} /> 
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/payment" element={<PaymentMethod />} />  
        
      </Routes>
    </Router>
  );
};

export default App;
