import { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Banner from './Banner.jsx';

import banner1 from '../../../assets/banners/banner 1.png';
import banner2 from '../../../assets/banners/banner 2.png';
import banner3 from '../../../assets/banners/banner 3.png';

const slides = [
  {
    banner: banner2,
    title: "Find Your Cause, Make a Difference",
    description: "Discover opportunities to lend a helping hand and contribute to causes that matter to you.",
  },
  {
    banner: banner1,
    title: "Empowering Communities, One Volunteer at a Time",
    description: "Join us in building stronger communities by connecting volunteers with meaningful initiatives.",
  },
  {
    banner: banner3,
    title: "Connect. Volunteer. Transform Lives.",
    description: "A platform that brings together passionate individuals and impactful projects to create lasting change.",
  },
];


export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-20">
      <AwesomeSlider className="max-h-[35rem] h-[35rem]" selected={currentIndex}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full">
            <Banner ban={slide.banner} title={slide.title} description={slide.description} />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
}
