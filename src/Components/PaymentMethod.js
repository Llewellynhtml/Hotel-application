import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import './PaymentMethod.css';

const PaymentMethod = () => {
  const [paymentType, setPaymentType] = useState(''); // Track payment type
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleCardSubmit = (e) => {
    e.preventDefault();

    if (cardNumber.length < 16 || securityCode.length < 3) {
      setNotification('Please enter valid card details.');
      return;
    }

    console.log({
      cardNumber,
      nameOnCard,
      expiryMonth,
      expiryYear,
      securityCode,
    });

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

  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
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
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'paypal' }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                setNotification(`Transaction completed by ${details.payer.name.given}`);
                setTimeout(() => {
                  resetForm();
                  navigate('/rooms');
                }, 2000);
              });
            }}
          />
        </PayPalScriptProvider>
      )}

      
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default PaymentMethod;
