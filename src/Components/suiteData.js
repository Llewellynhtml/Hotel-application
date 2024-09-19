// suites images
import Suite1Lg from './suites/suite1-lg.png';
import Suite1 from './suites/suite1.png';
import Suite2Lg from './suites/suite2-lg.png';
import Suite2 from './suites/suite2.png';
import Suite3Lg from './suites/suite3-lg.png';
import Suite3 from './suites/suite3.png';
import Suite4Lg from './suites/suite4-lg.png';
import Suite4 from './suites/suite4.png';
import Suite5Lg from './suites/suite5-lg.png';
import Suite5 from './suites/suite5.png';
import Suite6Lg from './suites/suite6-lg.png';
import Suite6 from './suites/suite6.png';

import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
  FaConciergeBell,
} from 'react-icons/fa';

export const suiteData = [
  {
    id: 1,
    name: 'Presidential Suite',
    description:
      'The Presidential Suite offers unmatched luxury and elegance, featuring a spacious living area, a grand master bedroom, and a private balcony with panoramic views. Perfect for hosting guests and enjoying premium amenities.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee Maker', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Concierge Service', icon: <FaConciergeBell /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast Included', icon: <FaHotdog /> },
      { name: 'Private Gym', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 150,
    maxPerson: 5,
    price: 800,
    image: Suite1,
    imageLg: Suite1Lg,
  },
  {
    id: 2,
    name: 'Royal Suite',
    description:
      'A lavish suite offering regal comfort with opulent interiors, expansive space, and a private garden. Experience royalty with premium services and exclusive access to a private dining area.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee Maker', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Concierge Service', icon: <FaConciergeBell /> },
      { name: 'Private Garden', icon: <FaParking /> },
      { name: 'Breakfast Included', icon: <FaHotdog /> },
      { name: 'Gym', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 180,
    maxPerson: 6,
    price: 950,
    image: Suite2,
    imageLg: Suite2Lg,
  },
  {
    id: 3,
    name: 'Ambassador Suite',
    description:
      'Designed for dignitaries and business elites, the Ambassador Suite offers a sophisticated environment with a conference room, luxurious living quarters, and 24/7 butler service.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee Maker', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Butler Service', icon: <FaConciergeBell /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast Included', icon: <FaHotdog /> },
      { name: 'Gym', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 160,
    maxPerson: 4,
    price: 720,
    image: Suite3,
    imageLg: Suite3Lg,
  },
  {
    id: 4,
    name: 'Honeymoon Suite',
    description:
      'Romantic and elegant, the Honeymoon Suite is the perfect escape for couples, with a private jacuzzi, serene views, and exquisite décor. Enjoy a champagne welcome and special honeymoon services.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee Maker', icon: <FaCoffee /> },
      { name: 'Private Jacuzzi', icon: <FaBath /> },
      { name: 'Concierge Service', icon: <FaConciergeBell /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast Included', icon: <FaHotdog /> },
      { name: 'Gym', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 120,
    maxPerson: 2,
    price: 680,
    image: Suite4,
    imageLg: Suite4Lg,
  },
  {
    id: 5,
    name: 'Penthouse Suite',
    description:
      'The Penthouse Suite offers a luxurious rooftop experience with a private pool, stunning city views, and exclusive access to a personal chef. Ideal for high-end living in the city.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee Maker', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Private Chef', icon: <FaConciergeBell /> },
      { name: 'Private Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast Included', icon: <FaHotdog /> },
      { name: 'Gym', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 200,
    maxPerson: 8,
    price: 1200,
    image: Suite5,
    imageLg: Suite5Lg,
  },
  {
    id: 6,
    name: 'Executive Suite',
    description:
      'The Executive Suite is designed for business professionals, offering a large workspace, high-speed internet, and premium office equipment. Enjoy luxury with a focus on productivity.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee Maker', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Office Space', icon: <FaConciergeBell /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast Included', icon: <FaHotdog /> },
      { name: 'Gym', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 130,
    maxPerson: 3,
    price: 650,
    image: Suite6,
    imageLg: Suite6Lg,
  },
];
