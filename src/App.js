import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rooms from './Components/Rooms';
import RoomDetails from './Components/RoomDetails';
import BookingSection from './Components/BookingSection';
import Reservation from './Components/Reservation';
import PaymentMethod from './Components/PaymentMethod';
import Signup from './Components/Signup'; 
import Signin from './Components/signin'; 
import HomePage from './Components/Homepage';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'; 
import Admin from './Components/admin/Admin';



const App = () => {
  const initialOptions = {
    clientId: "ARpZnmJcm0xIXH_3yCLPXzGId9GzddeFZ2tIhjldqn_oqkxQ478Q0ndiDS8M74-EYyqO84HpBSAWbOFE",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/accommodation/rooms" element={<Rooms />} /> 
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/book/:id" element={<BookingSection />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/signin" element={<Signin />} />  {/* Corrected here */}
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/payment" element={<PaymentMethod />} />   
          <Route path="/admin" element={<Admin />} />  {/* Admin route */}
        </Routes>
      </Router>
    </PayPalScriptProvider>
  );
};

export default App;
