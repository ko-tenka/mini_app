import React, { createContext, useState, useContext } from 'react';

// Создаем контекст корзины
export const CartContext = createContext();

// Провайдер корзины
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Функция для очистки корзины
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для удобного доступа к контексту
export const useCart = () => useContext(CartContext);
