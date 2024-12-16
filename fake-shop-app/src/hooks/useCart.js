import { useReducer } from "react";
import reducer from "../reducers/cart";

export const useCartReducer = (initialProducts) => {
    const [cart, dispatch] = useReducer(reducer, initialProducts);

    const addToCart = product => {
        dispatch({ type: "ADD_TO_CART", product: product });
    };

    const removeFromCart = product => {
        dispatch({ type: "REMOVE_FROM_CART", product: product });
    };

    const removeUnitFromCart = product => {
        dispatch({ type: "REMOVE_UNIT_FROM_CART", product: product });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    return { cart, addToCart, removeFromCart, removeUnitFromCart, clearCart };
};

export default useCartReducer