import React, { useState } from "react";
import "./DigitalLiteracy.css";
function DigitalLiteracy() {
  const slides = [
    "Slide 1: This is the first slide's content.",
    "Slide 2: Learning React is fun and interesting!",
    "Slide 3: Keep practicing to master front-end development.",
    "Slide 4: UI/UX plays an important role in web development.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="digital-con">
      <p className="heading">Why Digital Literacy</p>
      <div className="sub-con">
        <div className="slider-container">
         
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <div className="slide-content">
            <p className="text">{slides[currentIndex]}</p>
          </div>
          <div className="navigation-buttons">
            <button className="nav-btn" onClick={prevSlide}>
              ❮
            </button>
            <button className="nav-btn" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
        <div className="img-con">
          <img
          className="imgage"
            src="https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/landing/whyDL.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DigitalLiteracy;
