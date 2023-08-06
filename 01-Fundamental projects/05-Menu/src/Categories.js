import React from "react";

const Categories = ({ categories, onFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((item, i) => (
        <button
          onClick={() => onFilter(item)}
          key={i}
          className="btn"
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
