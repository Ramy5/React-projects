import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  loading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClearCart = () => dispatch({ type: "CLEAR_CART" });

  const handleRemoveItem = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const handleIncrease = (id) =>
    dispatch({ type: "INCREASE_AMOUNT", payload: id });

  const handleDecrease = (id) =>
    dispatch({ type: "DECREASE_AMOUNT", payload: id });

  const fetchCartData = async () => {
    dispatch({ type: "LOADING" });
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    dispatch({ type: "DISPLAY_DATA", payload: data });
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    dispatch({ type: "ITEMS_AMOUNT" });
  }, [state.cart]);

  const appValues = {
    ...state,
    handleClearCart,
    handleRemoveItem,
    handleIncrease,
    handleDecrease,
  };

  return (
    <AppContext.Provider value={appValues}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
