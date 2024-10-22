import React from 'react';
import './Offers.css'; // Import the specific CSS for styling
import image1 from './data/ooct-pool-1.jpg'
import image2 from './data/ooct-vista-interior-2.jpg'
import image3 from './data/ooct-exterior-island-balcony-2.jpg'

function Offers() {
  return (
    <div className="offers-container">
      {/* First Offer */}
      <div className="offer-content">
        <div className="offer-image">
          <img src={image1} alt="pool1" />
        </div>
        <div className="offer-text">
          <h1>One Escape</h1>
          <p>
            This exceptional offer, exclusive to South African residents, includes daily breakfast and access to all the resort's luxurious facilities, including the Spa, Fitness Centre, and Kids Club.
          </p>
          <ul>
            <li>20% off on all bookings for the month of October.</li>
            <li>Complimentary breakfast with every room reservation.</li>
          </ul>
        </div>
      </div>

      
      <div className="offer-content">
        <div className="offer-image">
          <img src={image2} alt="interior" />
        </div>
        <div className="offer-text">
          <h1>Your Urban Retreat</h1>
          <p>
            Re-energize and invigorate with exclusive offers on a one or two-night stay, featuring curated adventures and local flavors. Book a two-night stay to enjoy a variety of unique experiences.
          </p>
          <p>
            The Urban Retreat offer* includes:
          </p>
          <ul>
            <li>Choose from wine tasting, cooking classes, and more with a two-night stay**.</li>
            <li>Complimentary breakfast daily.</li>
            <li>Complimentary use of the Fitness Centre and Thermal Suites at One&Only Spa.</li>
            <li>Complimentary use of KidsOnly Club.</li>
            <li>Unlimited complimentary WiFi throughout the resort.</li>
          </ul>
          <p>
            *This offer is applicable only to South African residents. ID is required at check-in.<br />
            **Experiences are limited to one per stay.
          </p>
        </div>
      </div>

      
      <div className="offer-content">
        <div className="offer-image">
          <img src={image3} alt="island-balcony" />
        </div>
        <div className="offer-text">
          <h1>Nights on Us</h1>
          <p>
            Take your time to truly connect with One&Only Cape Town. Book a four-night stay at our urban oasis, and we will offer you the 4th night complimentary. If you choose to stay longer, enjoy every fourth night on us.
          </p>
          <p>
            Offer includes:
          </p>
          <ul>
            <li>Stay 4 nights, pay for only 3 nights.</li>
            <li>Stay 8 nights, pay for only 6 nights.</li>
            <li>Complimentary daily breakfast for two.</li>
          </ul>
          <p>
            Minimum stay: 4 nights
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
