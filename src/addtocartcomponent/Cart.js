import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import Items from "./Items";

export const CartContext = createContext();
 
const initialState = {
  item: Items,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (product) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: product,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (product) => {
    return dispatch({
      type: "INCREMENT",
      payload: product,
    });
  };

  // decrement the item
  const decrement = (product) => {
    return dispatch({
      type: "DECREMENT",
      payload: product,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
