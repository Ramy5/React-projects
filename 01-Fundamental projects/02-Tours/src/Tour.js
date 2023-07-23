import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, onDelete }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleMore = () => setReadMore((more) => !more);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(250)}...`}
          <button className="info-btn" onClick={toggleMore}>
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button
          className="btn delete-btn btn-block"
          onClick={() => onDelete(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
