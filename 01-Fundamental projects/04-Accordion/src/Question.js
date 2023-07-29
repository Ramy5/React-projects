import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info, title, counter, isOpen, onOpen }) => {
  const show = counter === isOpen;

  const handleShow = () => onOpen(show ? null : counter);

  return (
    <div
      className="question"
      style={{ borderTop: `${show ? "3px solid #49a6e9" : ""}` }}
    >
      <header onClick={handleShow}>
        <h4 style={{ color: `${show ? "#49a6e9" : ""}` }}>
          {counter < 10 ? `0${counter + 1}` : counter + 1} {title}
        </h4>
        <button className="btn">
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </div>
  );
};

export default Question;
