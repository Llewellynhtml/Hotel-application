import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate,useLocation } from 'react-router-dom';
import './PaymentMethod.css';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db } from "../config/firebase"; 

const PaymentMethod = ({ selectedRoomId }) => {
  const [paymentType, setPaymentType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [notification, setNotification] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null); 
  const navigate = useNavigate();
  const location=useLocation()
  console.log("location is:",location.state)

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        if (selectedRoomId) {
          const roomDoc = await getDoc(doc(db, 'Rooms', selectedRoomId));
          if (roomDoc.exists()) {
            setSelectedRoom(roomDoc.data());
            console.log("Selected Room is:",roomDoc)
          } else {
            console.error("Room not found");
            setNotification("Room not found");
          }
        }
      } catch (error) {
        console.error('Error fetching room:', error);
        setNotification("Error fetching room details. Please try again.");
      }
    };

    fetchRoomData();
  }, [selectedRoomId]);

  const addBookingToFirestore = async (booking) => {
    try {
      await addDoc(collection(db, 'bookings'), booking);
      console.log('Booking added successfully:', booking);
    } catch (error) {
      console.error('Error adding booking to Firestore:', error.message);
      setNotification('There was an error processing your booking. Please try again. Error: ' + error.message);
    }
  };
  
  const handleCardSubmit = (e) => {
    e.preventDefault();

    if (cardNumber.length < 16 || securityCode.length < 3 || expiryMonth === '' || expiryYear === '') {
      setNotification('Please enter valid card details.');
      return;
    }

    // const bookingData = {
    //   clientName: "John",
    //   surname: "Doe",
    //   roomName: selectedRoom?.name,
    //   roomPrice: selectedRoom?.price,
    //   startDate: "2024-09-30",
    //   endDate: "2024-10-05",
    //   adults: 2,
    //   children: 1,
    //   totalPrice: selectedRoom?.price * 5,
    //   paymentType: 'Card',
    // };

    // addBookingToFirestore(bookingData);

    setNotification('Your booking has been reserved!');

    setTimeout(() => {
      resetForm();
      navigate('/rooms');
    }, 2000);
  };

  const resetForm = () => {
    setCardNumber('');
    setNameOnCard('');
    setExpiryMonth('');
    setExpiryYear('');
    setSecurityCode('');
    setNotification('');
  };

  const paymentMethods = [
    { name: 'Visa', icon: faCcVisa, type: 'card' },
    { name: 'Mastercard', icon: faCcMastercard, type: 'card' },
    { name: 'PayPal', icon: faCcPaypal, type: 'paypal' },
  ];

  return (
    <div className="payment-method-container">
      <h2>Payment Method</h2>
      <div className="payment-icons">
        {paymentMethods.map((method) => (
          <FontAwesomeIcon
            key={method.name}
            icon={method.icon}
            className="payment-icon"
            onClick={() => {
              setPaymentType(method.type);
              resetForm();
            }}
          />
        ))}
      </div>

      {paymentType === 'paypal' && (
        // <PayPalScriptProvider options={{ "client-id": "your-client-id-here" }}>
          <PayPalButtons
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                // const bookingData = {
                //   clientName: "John",
                //   surname: "Doe",
                //   roomName: selectedRoom?.name,
                //   roomPrice: selectedRoom?.price,
                //   startDate: "2024-09-30",
                //   endDate: "2024-10-05",
                //   adults: 2,
                //   children: 1,
                //   totalPrice: selectedRoom?.price * 5,
                //   paymentType: 'PayPal',
                // };

                setNotification(`Transaction completed by ${details.payer.name.given_name}`);
                addBookingToFirestore(location.state);

                setTimeout(() => {
                  navigate('/rooms');
                }, 2000);
              }).catch((error) => {
                console.error("PayPal transaction failed:", error);
                setNotification("PayPal transaction failed. Please try again.");
              });
            }}
            onError={(err) => {
              console.error("PayPal error:", err);
              setNotification("Error processing PayPal payment.");
            }}
          />
        // </PayPalScriptProvider>
      )}

      {paymentType === 'card' && (
        <form onSubmit={handleCardSubmit} className="card-payment-form">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <input
            type="text"
            name="nameOnCard"
            placeholder="Name on Card"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />
          <div className="expiry-date">
            <input
              type="number"
              name="expiryMonth"
              placeholder="MM"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              required
            />
            <input
              type="number"
              name="expiryYear"
              placeholder="YYYY"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            name="securityCode"
            placeholder="Security Code"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            required
          />
          <button type="submit">Submit Payment</button>
        </form>
      )}

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default PaymentMethod;
