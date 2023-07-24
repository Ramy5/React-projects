import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { image, name, job, text } = people[index];

  const checkNumber = (num) => {
    if (num > people.length - 1) return 0;

    if (num < 0) return people.length - 1;

    return num;
  };

  const handleNext = () => setIndex((i) => checkNumber(i + 1));

  const handlePrev = () => setIndex((i) => checkNumber(i - 1));

  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (index === randomNumber) randomNumber = index + 1;

    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div>
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <div>
        <button className="random-btn" onClick={handleRandom}>
          Surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
