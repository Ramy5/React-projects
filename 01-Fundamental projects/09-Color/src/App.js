import React, { useEffect, useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [error, setError] = useState(false);
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState(new Values("#f0f").all(10));

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const colors = new Values(color).all(10);
      setColorList(colors);
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            placeholder="#f0f"
          />
          <button
            style={{ backgroundColor: color }}
            className="btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        {colorList.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>

      {error && (
        <p className="error-value">Wrong value, please enter a valid color.</p>
      )}
    </>
  );
}

export default App;
