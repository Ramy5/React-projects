import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slidesLength = slides.length - 1;

    if (index < 0) setIndex(slidesLength);

    if (index > slidesLength) setIndex(0);
  }, [index, slides]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Slider
        </h2>
      </div>

      <div className="section-center">
        {slides.map((slide, slideIndex) => {
          const { id, name, image, title, quote } = slide;

          let activeSlide = "nextSlide";

          if (slideIndex === index) activeSlide = "activeSlide";

          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slides.length - 1)
          )
            activeSlide = "lastSlide";

          return (
            <article className={activeSlide} key={id}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
