import React, { useState, useEffect } from 'react';

const ImageSlides = [
  {
    id: 1,
    imageUrl: "/home/foto1.png",
    altText: "Descripción imagen 1"
  },
  {
    id: 2,
    imageUrl: "/home/foto2.png",
    altText: "Descripción imagen 2"
  },
  {
    id: 3,
    imageUrl: "/home/foto3.png",
    altText: "Descripción imagen 3"
  }
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === ImageSlides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[240px] sm:h-[360px] md:h-[500px] overflow-hidden rounded-xl">
      {ImageSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.altText}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
