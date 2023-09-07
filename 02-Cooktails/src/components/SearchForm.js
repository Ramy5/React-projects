import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchTermRef = useRef("");

  const handleSearchTerm = () => setSearchTerm(searchTermRef.current.value);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className="section search">
      <div className="search-form">
        <form onSubmit={handleSubmit} className="form-control">
          <input
            ref={searchTermRef}
            onChange={handleSearchTerm}
            id="search"
            type="search"
          />
          <label className="btn" htmlFor="search">
            search
          </label>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
