import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <form className="search">
      <div className="search-form">
        <div className="form-control">
          <input className="search" type="search" />
          <label>search</label>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
