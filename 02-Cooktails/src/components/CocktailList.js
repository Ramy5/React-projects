import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { isLoading, cooktails } = useGlobalContext();

  if (isLoading) return <Loading />;

  if (!cooktails)
    return (
      <h2 className="section-title">
        Couldn't found any results for this search term.
      </h2>
    );

  return (
    <section className="section">
      <div className="cocktails-center">
        {cooktails?.map((coocktail) => (
          <Cocktail key={coocktail.id} {...coocktail} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
