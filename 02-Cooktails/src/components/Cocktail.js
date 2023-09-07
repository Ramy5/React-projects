import React from "react";
import { Link } from "react-router-dom";

const Cocktail = (props) => {
  const { alcoholic, id, drink, glass, img } = props;

  return (
    <section className="cocktail-center">
      <article className="cocktail">
        <div>
          <img src={img} alt={glass} />
        </div>
        <div className="cocktail-footer">
          <h3>{drink}</h3>
          <h4>{glass}</h4>
          <p>{alcoholic}</p>
          <Link className="btn" to={`/cooktail/${id}`}>
            Details
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Cocktail;
