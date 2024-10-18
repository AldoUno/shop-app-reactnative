import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [basketLimit, setBasketLimit] = useState(10);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

            if (existingProductIndex !== -1) {
                // Producto ya existe en el carrito, actualizamos la cantidad
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += product.quantity;
                return updatedCart;
            } else {
                // Producto no existe, lo añadimos
                return [...prevCart, product];
            }
        });
    };

    const clearCart = () => {
        setCart([]);  // Vacía el carrito
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const isBasketFull = () => cart.reduce((sum, item) => sum + item.quantity, 0) >= basketLimit;

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, basketLimit, setBasketLimit, isBasketFull, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

