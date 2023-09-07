import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [isLoading, setIsLoading] = useState(true);
  const [cooktails, setCooktails] = useState([]);

  const getCooktails = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${url}${searchTerm}`);
      const newData = data?.drinks?.map((item) => {
        return {
          id: item?.idDrink,
          alcoholic: item?.strAlcoholic,
          drink: item?.strDrink,
          img: item?.strDrinkThumb,
          glass: item?.strGlass,
        };
      });

      setCooktails(newData);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    getCooktails();
  }, [searchTerm, getCooktails]);

  const values = { setSearchTerm, cooktails, isLoading };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

// make sure use
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
