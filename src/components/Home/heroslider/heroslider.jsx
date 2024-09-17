import React, { useState, useEffect } from 'react';
import './heroslider.css'; // Import the CSS file

function HeroSlider({ herosliderimages, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % herosliderimages.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [herosliderimages.length, interval]);

  return (
    <div className="slider">
      <img src={herosliderimages[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
}

export default HeroSlider;
