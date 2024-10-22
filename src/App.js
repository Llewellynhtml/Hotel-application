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
import Offers from './Components/Offers'; 
import { PayPalScriptProvider } from '@paypal/react-paypal-js'; 
import Admin from './Components/admin/Admin';
import ForgotPassword from "./Components/forgotpassword";
import Fitness from './Components/Fitness'; 
import Wellness from './Components/Wellness'; 
import WineStudio from './Components/WineStudio'; // Import WineStudio component
import AboutUs from './Components/AboutUs'; // Import AboutUs component
import Corporate from './Components/Corporate'; // Import Corporate component

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
          <Route path="/signin" element={<Signin />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/payment" element={<PaymentMethod />} />   
          <Route path="/admin" element={<Admin />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/experience/wellness" element={<Wellness />} /> 
          <Route path="/experience/fitness" element={<Fitness />} /> 
          <Route path="/dining/winestudio" element={<WineStudio />} />
          <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/corporate" element={<Corporate />} />
        </Routes>
      </Router>
    </PayPalScriptProvider>
  );
};

export default App;
