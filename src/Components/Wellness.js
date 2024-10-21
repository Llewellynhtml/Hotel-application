import React from 'react';
import './Wellness.css'; 
import image1 from './data/espa-detail.jpg';
import image2 from './data/spa-outdoor.jpg';
import image3 from './data/spa-detail.jpg';
import image4 from './data/asian-woman.jpg';
import image5 from './data/spa-yoga.jpg';
import image6 from './data/fitness-centre.jpg';

const Wellness = () => {
    return (
        <div className="wellness-container">
            <header className="wellness-header">
                <h1>Feel Good, Look Great</h1>
                <p>
                    Rebalance and realign with bespoke treatments at One&Only Spa, salon pampering at StudiO, 
                    and fitness activities for total mind-body wellbeing.
                </p>
            </header>

            <section className="spa-indulgence">
                <h2>Indulge at One&Only Spa</h2>
                <div className="image-group">
                    <img src={image1} alt='espa'/>
                    <img src={image2} alt='outdoor'/>
                </div>
                <p>
                    Escape to Spa Island, where you can be pampered with restorative mind, body, and soul experiences. 
                    Unwind, restore, and elevate with face and body treatments dedicated to your wellbeing. 
                    Local beauty rituals target your needs, from luxury facials and peels to scrubs, wraps, and full body massages.
                </p>
            </section>

            <section className="additional-info">
                <h2>Additional Information</h2>
                <p>Opening times: 08:00 am to 8:00 pm</p>
                <p>Age Policy: Guests must be over 16 years</p>
            </section>

            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>Phone: <a href="tel:+274315810">+27 (0) 431 5810</a></p>
                <p>Email: <a href="mailto:spa.reservations@oneandonlycapetown.com">spa.reservations@oneandonlycapetown.com</a></p>
                <p><a href="#menu">View Menu</a></p>
            </section>

            <section className="studiO-section">
                <h2>Be Polished at StudiO</h2>
                <p>
                    Committed to the highest level of care, StudiO is Cape Town’s exclusive beauty and grooming salon, 
                    specialising in personalisation. Trust our expert technicians with precise treatments including 
                    threading, micro-blading, eyelash extensions, and waxing.
                </p>
                <div className="image-group">
                    <img src={image3} alt='studiO'/>
                    <img src={image4} alt='asian-women'/>
                </div>
            </section>

            <section className="fitness-section">
    <div className="image5-container">
        <img className="image5" src={image5} alt='spa-yoga'/>
        <div className="fitness-container">
            <h2>Fitness Centre at One&Only Cape Town</h2>
            <p>
                Explore our stylish 200-square-metre One&Only Fitness Centre, fully equipped with cutting-edge equipment. 
                Join our boot camp, kickboxing, or kettlebell workouts and be challenged and energized. 
                Accomplish more than you thought possible with our expert personal trainers.
            </p>
            <img className="sticky" src={image6} alt='fitness-center'/>
        </div>
    </div>
    
    <p>Additional Information:</p>
    <ul>
        <li>Opening hours: 6 am – 8 pm</li>
        <li>Age Policy: Guests must be aged over 16 years</li>
        <li>Contact: <a href="tel:+274315810">+27 (0) 431 5810</a></li>
        <li>Email: <a href="mailto:fitness.centre@oneandonlycapetown.com">fitness.centre@oneandonlycapetown.com</a></li>
        <li><a href="#menu">View Menu</a></li>
    </ul>
</section>






            <section className="activities-section">
                <h2>You May Also Like</h2>
                <p>
                    Sunset hike on Table Mountain
                    <br />
                    Adventures & activities
                    <br />
                    From paddle-boarding to whale-watching tours, let us create a bespoke itinerary of Cape Town’s most memorable experiences.
                </p>
                <p><a href="#explore">Explore</a></p>
            </section>

            <section className="table-mountain-section">
                <h2>Discover Table Mountain</h2>
                <p>
                    Discover the majesty of Table Mountain up close, with rock-climbing, hiking, and photography tours 
                    to the UNESCO World Heritage Site.
                </p>
                <p><a href="#explore">Explore</a></p>
            </section>
        </div>
    );
};

export default Wellness;
