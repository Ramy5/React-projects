import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { modalIsOpen, handleCloseModal } = useGlobalContext();

  return (
    <div className={`${modalIsOpen ? "show-modal" : ""} modal-overlay`}>
      <div className="modal-container">
        <button className="close-modal-btn" onClick={handleCloseModal}>
          <FaTimes />
        </button>
        <h2>modal content</h2>
      </div>
    </div>
  );
};

export default Modal;
