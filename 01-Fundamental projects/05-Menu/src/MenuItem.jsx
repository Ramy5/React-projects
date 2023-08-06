import React from "react";

const MenuItem = ({ title, price, desc, img }) => {
  return (
    <article className="menu-item">
      <img className="photo" src={img} alt={title} />

      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <span className="price">{price}</span>
        </header>

        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
