// FitnessClassesSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FitnessClassesSlider.css'; // Create this file for any custom styling

import { Navigation, Pagination } from 'swiper/modules';

// Import your fitness class images
import image1 from './data/FitnessA/personal training.jpg';
import image2 from './data/FitnessA/fitness-assessment.jpg';
import image3 from './data/FitnessA/core-stability.jpg';
import image4 from './data/FitnessA/Boxing.jpg';
import image5 from './data/FitnessA/Strectching.jpg';
import image6 from './data/FitnessA/Kinesis™ Programme.jpg';
import image7 from './data/FitnessA/Power Plate.jpg';

const fitnessClasses = [
    { src: image1, title: "Personal Training", description: "A customised training session focused on your specific strengths and needs. Duration: 30/60/90 minutes." },
    { src: image2, title: "Health & Fitness Assessment", description: "A guided questionnaire and tests to assess your body composition, muscular endurance, stamina, and flexibility. Duration: 90 minutes." },
    { src: image3, title: "Core Stability", description: "Strengthening the muscles of the abdominals, trunk, and pelvis. Duration: 30 minutes." },
    { src: image4, title: "Boxing", description: "Combines boxing skills with body weight exercises. Duration: 30 minutes." },
    { src: image5, title: "Assisted Stretching", description: "A session devoted to relaxation and improving flexibility. Duration: 30 minutes." },
    { src: image6, title: "Kinesis™ Programme", description: "Focuses on movement through balance, flexibility, and strength. Duration: 60 minutes." },
    { src: image7, title: "Power Plate®", description: "Uses vibration to stimulate the body’s natural response. Duration: 30 minutes." },
];

const FitnessClassesSlider = () => {
    return (
        <div className="fitness-classes-slider">
            <h2>Fitness Classes</h2>
            <p>Find your passion, focus on yourself, and make it part of your life.</p>
            <Swiper
                modules={[Navigation, Pagination]} 
                spaceBetween={30}
                loop={true}
                slidesPerView={3} 
                slidesPerGroup={1} 
                pagination={{ clickable: true }}
                navigation={true}
                className="mySwiper"
            >
                {fitnessClasses.map((fitnessClass, index) => (
                    <SwiperSlide key={index}>
                        <div className="class-card">
                            <img src={fitnessClass.src} alt={fitnessClass.title} />
                            <h3>{fitnessClass.title}</h3>
                            <p>{fitnessClass.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FitnessClassesSlider;
