import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

// Array of images and links
const images = [
  { src: image1, name: "CURATED CAPE TOWN TIPS", link: "/page1" },
  { src: image2, name: "CAPE TOWN HERITAGE GUIDE", link: "/page2" },
  { src: image3, name: "ROOIBOS: SOUTH AFRICAN TEA", link: "/page3" },
  { src: image4, name: "SAKE AT NOBU", link: "/page4" },
  { src: image5, name: "FOR THE CURIOUS", link: "/page5" },
  { src: image6, name: "MINDFUL MORNINGS", link: "/page6" },
  { src: image7, name: "NATURAL WONDERS", link: "/page7" },
  { src: image8, name: "CAPE TOWN ART & DESIGN GUIDE", link: "/page8" },
  { src: image9, name: "NOBU'S VEGAN OMAKASE MENUS", link: "/page9" },
];

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]} // Use navigation and pagination modules
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="card-content">
              <img src={image.src} alt={image.name} />
              <h3>{image.name}</h3>
              <a href={image.link} className="slider-link">
                Learn More
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
