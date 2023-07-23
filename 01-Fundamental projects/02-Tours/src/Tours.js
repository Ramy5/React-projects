import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, onDelete }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>

      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} onDelete={onDelete} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
