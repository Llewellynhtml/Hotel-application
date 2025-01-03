import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentMethod.css';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../config/firebase'; // Ensure auth is imported
import { useDispatch } from 'react-redux';
import { addUserBookings } from '../Redux/dbslice';
import axios from 'axios'; // Import Axios

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
  const location = useLocation();
  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        if (selectedRoomId) {
          const roomDoc = await getDoc(doc(db, 'Rooms', selectedRoomId));
          if (roomDoc.exists()) {
            setSelectedRoom(roomDoc.data());
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

  const sendConfirmationEmail = async (email, bookingDetails) => {
    try {
      const response = await axios.post('https://email-server-pw87.onrender.com/send-email', {
        to: 'Llewellyn.ml.info@gmail.com',  // Email to send the confirmation to
        subject: 'Booking Confirmation',
        text: `Thank you for booking with us. Here are your booking details:\n\n${JSON.stringify(bookingDetails, null, 2)}`,
      });
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification('Failed to send confirmation email. Please check your booking details.');
    }
  };

  const handleCardSubmit = async (e) => {
    e.preventDefault();

    if (cardNumber.length < 16 || securityCode.length < 3 || expiryMonth === '' || expiryYear === '') {
      setNotification('Please enter valid card details.');
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      setNotification('User not authenticated.');
      return;
    }

    const bookingData = {
      ...location.state,
      roomDetails: selectedRoom,
      paymentType: 'Card',
    };

    setNotification('Your booking has been reserved!');
    dispatch(addUserBookings(bookingData));

    // Send confirmation email
    await sendConfirmationEmail(user.email, bookingData);

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
        <PayPalButtons
          onApprove={(data, actions) => {
            return actions.order.capture().then(async (details) => {
              setNotification(`Transaction completed by ${details.payer.name.given_name}`);
              const user = auth.currentUser;
              if (user) {
                const bookingData = {
                  ...location.state,
                  roomDetails: selectedRoom,
                  paymentType: 'PayPal',
                };
                dispatch(addUserBookings(bookingData));
                await sendConfirmationEmail(user.email, bookingData);
              }
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
