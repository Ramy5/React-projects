const reducer = (state, action) => {
  // HANDLE CLEAR CART ITEMS
  if (action.type === "CLEAR_CART") return { ...state, cart: [] };

  // HANDLE REMOVE CART ITEM
  if (action.type === "REMOVE_ITEM") {
    const newCartState = state.cart.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, cart: newCartState };
  }

  // HANDLE INCREASE AMOUNT OF ITEM
  if (action.type === "INCREASE_AMOUNT") {
    const newCartAmount = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return { ...state, cart: newCartAmount };
  }

  // HANDLE DECREASE AMOUNT OF ITEM
  if (action.type === "DECREASE_AMOUNT") {
    const newCartAmount = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);

    return { ...state, cart: newCartAmount };
  }

  // HANDLE AMOUNT AND TOTAL PRICE
  if (action.type === "ITEMS_AMOUNT") {
    let { total, amount } = state.cart.reduce(
      (itemsAcc, items) => {
        const { price, amount } = items;
        const totalPrice = amount * price;
        itemsAcc.total += totalPrice;
        itemsAcc.amount += amount;

        return itemsAcc;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, amount, total };
  }

  // HANDLE LOADING
  if (action.type === "LOADING") return { ...state, loading: true };

  // HANDLE FETCHING AND DISPLAYING DATA
  if (action.type === "DISPLAY_DATA")
    return { ...state, cart: action.payload, loading: false };

  throw new Error("SOMETHING WENT WRONG");
};

export default reducer;
