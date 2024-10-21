import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./ImageSlider.css"

import { Navigation, Pagination } from 'swiper/modules'; 

import image1 from "./data/curated 1.jpg";
import image2 from "./data/curiosities 2.jpg";
import image3 from "./data/design guide 3.jpg";
import image4 from "./data/heritage 4.jpg";
import image5 from "./data/Mindful morning 5.jpg";
import image6 from "./data/natural wonders 6.jpg";
import image7 from "./data/nobu-vegan-omakase 7.jpg";
import image8 from "./data/rooibos 8.jpg";
import image9 from "./data/sake-food 9.jpg";


const images = [
  { src: image1, name: "CURATED CAPE TOWN TIPS" },
  { src: image2, name: "CAPE TOWN HERITAGE GUIDE" },
  { src: image3, name: "ROOIBOS: SOUTH AFRICAN TEA" },
  { src: image4, name: "SAKE AT NOBU" },
  { src: image5, name: "FOR THE CURIOUS" },
  { src: image6, name: "MINDFUL MORNINGS" },
  { src: image7, name: "NATURAL WONDERS" },
  { src: image8, name: "CAPE TOWN ART & DESIGN GUIDE" },
  { src: image9, name: "NOBU'S VEGAN OMAKASE MENUS" },
];

const ImageSlider = () => {
  return (
    <div className="slider-container">
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="card-content">
              <img src={image.src} alt={image.name} />
              <h3>{image.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
