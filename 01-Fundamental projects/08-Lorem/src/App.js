import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleCountChange = (e) => setCount(e.target.value);

  if (count <= 0) setCount(1);
  if (count > data.length) setCount(data.length);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setText(data.slice(0, count));
  };

  return (
    <section className="section">
      <div className="section-center">
        <h3>tired of boring lorem ipsum?</h3>

        <form className="lorem-form" onSubmit={handleFormSubmit}>
          <label htmlFor="number">Paragraphs:</label>
          <input
            id="number"
            type="number"
            name="number"
            value={count}
            onChange={handleCountChange}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>

        {text.map((txt, i) => {
          return (
            <p key={i} className="result">
              {txt}
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default App;
