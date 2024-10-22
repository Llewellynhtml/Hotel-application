import React from 'react';
import './Fitness.css'; 
import image8 from './data/FitnessA/lifestyle-yoga.jpg'; // Only keeping the yoga image here
import FitnessClassesSlider from './FitnessClassesSlider'; // Import the slider

const Fitness = () => {
    return (
        <div className="fitness-container">
            <header className="fitness-header">
                <h1>Cape Town’s Exclusive Gym</h1>
                <p>
                    Explore our stylish 200-square-metre One&Only Fitness Centre, fully equipped with cutting-edge equipment. 
                    Join our boot camp, kickboxing, or kettlebell workouts and be challenged and energized. 
                    Accomplish more than you thought possible with our expert personal trainers.
                </p>
            </header>

            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>Phone: <a href="tel:+274315810">+27 (0) 431 5810</a></p>
                <p>Email: <a href="mailto:fitness.centre@oneandonlycapetown.com">fitness.centre@oneandonlycapetown.com</a></p>
            </section>

            <section className="additional-info">
                <h2>Additional Information</h2>
                <p>Opening hours: 6am – 8pm</p>
                <p>Age Policy: Guests must be aged over 16 years</p>
                <p><a href="#menu">View Menu</a></p>
            </section>

            <section className="yoga-section">
                <h2>Bend and Flex</h2>
                <p>
                    Breathe, flow and unfold with hatha and vinyasa yoga sessions to energise your body and relax your mind. 
                    Discover our Balinese-style Spa Yoga Pavilion, shaded by palm trees, and indulge in deep, intense stretches 
                    and rhythmic movements. Find inner balance with mat-based Pilates, nourishing your body from the inside out.
                </p>
            </section>

            <section className="meditation-section">
                <h2>Meditate in Our Urban Oasis</h2>
                <p>
                    Succumb to the tranquility of our spa, located on its own private island. 
                    Take a moment with our expert yogis and be guided through a one-on-one mindfulness journey. 
                    Focus on deep breathing and letting go for a sense of clarity. 
                    There’s nowhere else you need to be.
                    <img src={image8} alt='yoga'/>
                </p>
            </section>

            {/* Replace the old fitness classes section with the new slider */}
            <FitnessClassesSlider />
        </div>
    );
};

export default Fitness;
