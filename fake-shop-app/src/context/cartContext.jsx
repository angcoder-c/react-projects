import { createContext, useContext, useState } from "react"
import useCartReducer from "../hooks/useCart"

export const CartContext = createContext()

export default function CartProvider ({ children }) {
    const {cart, addToCart, removeFromCart, removeUnitFromCart, clearCart} = useCartReducer([])
    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            removeFromCart, 
            removeUnitFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
