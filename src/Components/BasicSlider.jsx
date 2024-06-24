import React, { useEffect, useState } from "react";
import Carousel1 from '../images/Carousel-1.png'
import Carousel2 from '../images/Carousel-2.png'
import Carousel3 from '../images/Carousel-3.png'
import Carousel4 from '../images/Carousel-4.png'
import Carousel5 from '../images/Carousel-5.png'

const BasicSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);
//Add Images here in the Slides array 
  const slides = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];

  return (
    <div className="card relative">
      <div className="container2 relative sm:w-[935px] h-[300px] md:h-full lg-max:w-[1460px] md:min-h-[720px] md:w-[1625px]">
        <div className="carousel grid grid-cols-3 gap-4" >
          {/* Left arrow */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white font-bold py-4 px-6 rounded-l-md transition duration-300 z-10 hover:bg-transparent hover:text-red-600 hidden md:block"
            onClick={prevSlide}
          >
            ❮ {/* Left arrow symbol */}
          </button>
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item col-span-1 ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                display: index === currentSlide ? "block" : "none",
              }}
            >
              <img
                src={slide}
                className="carousel-image w-[335px] h-[300px] md:h-full md:min-h-[720px] md:w-[525px]"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
          {/* Right arrow */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white font-bold py-4 px-6 rounded-r-md transition duration-300 z-10 hover:bg-transparent hover:text-red-600 hidden"
            onClick={nextSlide}
          >
            ❯ {/* Right arrow symbol */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicSlider;