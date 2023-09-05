import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { isLoading, cooktails } = useGlobalContext();

  if (isLoading) return <Loading />;

  if (cooktails.length < 1)
    return (
      <h2 className="section-title">
        Couldn't found any results for this search term.
      </h2>
    );

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  );
};

export default CocktailList;
