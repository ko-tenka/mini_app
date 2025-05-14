// components/Bag/Bag.js
import React, { useContext } from 'react';
import { CartContext } from '../../app/Context/Context'; // Импортируем CartContext
import './Bag.css';

const Bag = () => {
    const { cart, removeFromCart } = useContext(CartContext);  // Получаем корзину и функцию для удаления

    if (cart.length === 0) {
        return <div>Ваша корзина пуста.</div>;
    }

    return (
        <div className="cart">
            <h2>Корзина</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                        <img src={item.img} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-info">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Цена: {item.price} руб.</p>
                            <button 
                                className="remove-btn" 
                                onClick={() => removeFromCart(item.id)}  // Удаляем товар из корзины
                            >
                                Удалить из корзины
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <h3>Итого: {cart.reduce((total, item) => total + item.price, 0)} руб.</h3>
            </div>
        </div>
    );
};

export default Bag;
