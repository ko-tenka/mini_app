// app/Context/Context.js
import React, { createContext, useState } from 'react';

// Создаем контекст корзины
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Функция для добавления товара в корзину
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Функция для удаления товара из корзины
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
