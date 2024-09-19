import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import './PaymentMethod.css';

const PaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log({
      cardNumber,
      nameOnCard,
      expiryMonth,
      expiryYear,
      securityCode,
    });
  };

  return (
    <div className="payment-method-container">
      <h2>Payment Method</h2>
      <div className="payment-icons">
        <FontAwesomeIcon icon={faCcVisa} className="payment-icon" />
        <FontAwesomeIcon icon={faCcMastercard} className="payment-icon" />
        <FontAwesomeIcon icon={faCcPaypal} className="payment-icon" />
      </div>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number*</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nameOnCard">Name on Card*</label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group expiry-date">
          <div>
            <label htmlFor="expiryMonth">Month*</label>
            <select
              id="expiryMonth"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              required
            >
              <option value="">Select Month</option>
              {Array.from({ length: 12 }, (v, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="expiryYear">Year*</label>
            <select
              id="expiryYear"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              required
            >
              <option value="">Select Year</option>
              {Array.from({ length: 20 }, (v, i) => (
                <option key={i} value={new Date().getFullYear() + i}>
                  {new Date().getFullYear() + i}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="securityCode">Security Code*</label>
          <input
            type="text"
            id="securityCode"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-payment-btn">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentMethod;
