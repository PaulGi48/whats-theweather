import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/img/bg.jpg',
  '/img/bg1.jpg',
  '/img/bg2.jpg',
  '/img/bg3.jpg',
  '/img/bg4.jpg',
  '/img/bg5.jpg',
  '/img/bg6.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
<div style={{
  position: 'relative',
  width: '100vw',
  height: '100vh',
}}>
  <div
    style={{
      backgroundImage: `url(${images[currentIndex]})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: 'blur(10px)',
      transition: 'background-position 3s ease-in-out, filter 3s ease-out',
      width: '100%',
      height: '100%',
    }}
  >
  </div>
  <div
    style={{
      backgroundColor: 'rgba(1, 0, 0, 0.5)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transition: 'background-color 1s ease-out',
    }}
  >
  </div>
</div>

    
   
  );
};

export default Slideshow;
