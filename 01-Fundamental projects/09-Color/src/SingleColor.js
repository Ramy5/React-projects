import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [copy, setCopy] = useState(false);
  const bgColor = rgb.join(",");
  const hexColor = rgbToHex(rgb[0], rgb[1], rgb[2]);

  const handleCopy = () => {
    navigator.clipboard.writeText(hexColor);
    setCopy(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopy(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copy]);

  return (
    <div
      onClick={handleCopy}
      className={`color ${index > 10 ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      {copy && <p className="alert">Copy to clipboard</p>}
    </div>
  );
};

export default SingleColor;
