import React, { useCallback, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id: cocktailId } = useParams();
  const [singleCocktail, setSingleCocktail] = useState(null);

  const handleFetch = useCallback(async () => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      const { data } = await axios.get(`${url}${cocktailId}`);
      const cocktailData = data.drinks[0];

      // CONVERT DATA
      const newData = {
        alcoholic: cocktailData?.strAlcoholic,
        drink: cocktailData?.strDrink,
        img: cocktailData?.strDrinkThumb,
        glass: cocktailData?.strGlass,
        category: cocktailData?.strCategory,
        instruction: cocktailData?.strInstructions,
        ingredients: [
          cocktailData?.strIngredient1,
          cocktailData?.strIngredient2,
          cocktailData?.strIngredient3,
          cocktailData?.strIngredient4,
          cocktailData?.strIngredient5,
        ],
      };

      setSingleCocktail(newData);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  }, [cocktailId]);

  useEffect(() => {
    handleFetch();
  }, [cocktailId, handleFetch]);

  if (isLoading) return <Loading />;

  return (
    <section className="cocktail-section single-cocktail">
      <header>
        <Link to={"/"}>
          <button style={{ marginBottom: "1rem" }} className="btn">
            back home
          </button>
        </Link>
        <h3>{singleCocktail?.drink}</h3>
      </header>
      <div className="drink">
        <img src={singleCocktail?.img} alt={singleCocktail?.glass} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span> {singleCocktail?.glass}
          </p>
          <p>
            <span className="drink-data">category:</span>{" "}
            {singleCocktail?.category}
          </p>
          <p>
            <span className="drink-data">info:</span>{" "}
            {singleCocktail?.alcoholic}
          </p>
          <p>
            <span className="drink-data">glass:</span> {singleCocktail?.glass}
          </p>
          <p>
            <span className="drink-data">ingtrfirnyd:</span>
            {singleCocktail?.ingredients?.join(", ")}
          </p>
          <p>
            <span className="drink-data">instructions: </span>{" "}
            {singleCocktail?.instruction}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
