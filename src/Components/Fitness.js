import React from 'react';
import './Fitness.css'; 
import image1 from './data/FitnessA/personal training.jpg'
import image2 from './data/FitnessA/fitness-assessment.jpg'
import image3 from './data/FitnessA/core-stability.jpg'
import image4 from './data/FitnessA/Boxing.jpg'
import image5 from './data/FitnessA/Strectching.jpg'
import image6 from './data/FitnessA/Kinesis™ Programme.jpg'
import image7 from './data/FitnessA/Power Plate.jpg'
import image8 from './data/FitnessA/lifestyle-yoga.jpg'


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

            <section className="fitness-classes">
                <h2>Fitness Classes</h2>
                <p>Find your passion, focus on yourself, and make it part of your life.</p>
                <ul>
                    <li>
                        <img src={image1} alt='personal-training'/>
                        <strong>Personal Training:</strong> 
                        A customised training session focused on your specific strengths and needs. 
                        Duration: 30/60/90 minutes.
                    </li>
                    <li>
                        <img src={image2} alt='boot-camp'/>
                        <strong>Health & Fitness Assessment:</strong> 
                        A guided questionnaire and tests to assess your body composition, muscular endurance, stamina, and flexibility. 
                        Duration: 90 minutes.
                    </li>
                    <li>
                        <img src={image3} alt='yoga'/>
                        <strong>Core Stability:</strong> 
                        Strengthening the muscles of the abdominals, trunk, and pelvis. Duration: 30 minutes.
                    </li>
                    <li>
                        <img src={image4} alt='pilates'/>
                        <strong>Boxing:</strong> 
                        Combines boxing skills with body weight exercises. Duration: 30 minutes.
                    </li>
                    <li>
                        <img src={image5} alt='running'/>
                        <strong>Assisted Stretching:</strong> 
                        A session devoted to relaxation and improving flexibility. Duration: 30 minutes.
                    </li>
                    <li>
                        <img src={image6} alt='yoga'/>
                        <strong>Kinesis™ Programme:</strong> 
                        Focuses on movement through balance, flexibility, and strength. Duration: 60 minutes.
                    </li>
                    <li>
                        <img src={image7} alt='yoga'/>
                        <strong>Power Plate®:</strong> 
                        Uses vibration to stimulate the body’s natural response. Duration: 30 minutes.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Fitness;
