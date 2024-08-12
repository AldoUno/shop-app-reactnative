import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [basketLimit, setBasketLimit] = useState(10);

    const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    };

    const isBasketFull = () => cart.length >= basketLimit;

    return (
        <CartContext.Provider value={{ cart, addToCart, basketLimit, setBasketLimit, isBasketFull }}>
            {children}
        </CartContext.Provider>
    );
};
