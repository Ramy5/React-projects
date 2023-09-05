import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <img src="./error.svg" alt="error" className="error-img" />
        <h1>Ohh!</h1>
        <p>We can't seem to find page you are looking for</p>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
