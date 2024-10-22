import React from 'react';
import './WineStudio.css';

const WineStudio = () => {
  return (
    <div className="wine-studio-container">
      <header className="wine-header">
        <h1>The Wine Studio</h1>
        <p>Discover an unforgettable wine experience at One&Only Cape Town.</p>
      </header>

      <section className="wine-details">
        <h2>A Peerless Wine Experience</h2>
        <p>
          With almost 700 references, One&Only Cape Town features one of the most balanced and diverse wine collections on the continent. The Wine Studio is a sleek and sophisticated space showcasing a sampling of the resort’s impressive offering. Guests can enjoy wine journeys like <strong>Sip & Savour</strong> and <strong>South African Wine Blending</strong> experiences.
        </p>
        <p>
          The Wine Studio is also ideal for hosting private dining events upon request.
        </p>

        <div className="wine-hours">
          <h3>Opening Hours</h3>
          <p>Daily, 4.00pm – 7.00pm</p>
          <h3>Contact Us</h3>
          <p>Phone: +27 21 431 4511</p>
          <p>Email: <a href="mailto:reservations@oneandonlycapetown.com">reservations@oneandonlycapetown.com</a></p>
        </div>

        <div className="wine-event">
          <h2>The Wine Studio Dinner Collection</h2>
          <p>Join our renowned sommelier, Luvo Ntezo, for a wine dinner with a twist. Sample Cape classics and global standouts, and match them to a four-course menu while engaging in free-flowing conversation.</p>
          <ul>
            <li>New vs Old – 28 April 2022</li>
            <li>Stellenbosch Kingdom of Cab – 30 June 2022</li>
            <li>Celebration of Women in Wine – 25 August 2022</li>
            <li>Boutique Wine Farms – 27 October 2022</li>
          </ul>
          <p><strong>Price:</strong> R990 per person</p>
          <p><strong>Time:</strong> 6.30pm</p>
          <p><strong>Venue:</strong> Wine Studio</p>
        </div>
      </section>

      <section className="sommelier-details">
        <h2>Meet Our Sommelier</h2>
        <p>
          Luvo Ntezo, recognised globally as South Africa’s Best Young Sommelier, will guide you through our exceptional selection of rare wines, offering insights into South African wine history and production.
        </p>
      </section>

      <section className="wine-experience">
        <h2>Sip and Savour - A Taste of Cape Town</h2>
        <p>
          Cape Town is home to some of the world’s finest wines. Join Luvo Ntezo for a guided tour of the Wine Studio, followed by a cheese and wine tasting featuring five prestigious vintages from the Cape's best vineyards.
        </p>
      </section>

      <footer className="wine-footer">
        <a href="https://www.google.com/maps/d/viewer?mid=1Cq9DVgTJc7pitOBuT9xJpbhxzlQ&femb=1&ll=-33.90861890401067%2C18.416445999999954&z=12" target="_blank" rel="noopener noreferrer">
          View Location on Map
        </a>
      </footer>
    </div>
  );
};

export default WineStudio;
