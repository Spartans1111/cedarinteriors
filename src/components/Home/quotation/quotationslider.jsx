import React, { useEffect, useState } from 'react';
import img1 from '../../../images/quotationslider/img1.png';
import img2 from '../../../images/quotationslider/img2.png';
import img3 from '../../../images/quotationslider/img3.png';
import img4 from '../../../images/quotationslider/img4.png';

const Quotationslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img1,img2,img3,img4 ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='quote-slider'> <div className="quote-slider-inner"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((src, index) => (
      <div key={index} className="h-slide">
        <img src={src} alt={`Slide ${index}`} />
      </div>
    ))}
  </div></div>
  )
}

export default Quotationslider