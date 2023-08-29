import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { handleCloseSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={handleCloseSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Manage Any Content Anywhere</h1>
          <p>
            Stripe is the leading open-source headless CMS. It’s 100% JavaScript
            and fully customizable.
          </p>

          <button className="btn">Start now</button>
        </article>

        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
