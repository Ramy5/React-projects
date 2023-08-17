import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ id, onEditItem, onRemoveItem, title }) => {
  return (
    <article className="grocery-item">
      <h4 className="title">{title}</h4>
      <div>
        <FaEdit className="edit-btn" onClick={() => onEditItem(id)} />
        <FaTrash className="delete-btn" onClick={() => onRemoveItem(id)} />
      </div>
    </article>
  );
};

export default List;
