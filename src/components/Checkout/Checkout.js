import React, { useState, useContext } from 'react';
import { CartContext } from '../../app/Context/Context'; // Импортируем CartContext
import './Checkout.css';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext); // Получаем корзину и функцию очистки
  const [isPaid, setIsPaid] = useState(false); // Статус оплаты
  const [name, setName] = useState(''); // Имя покупателя
  const [address, setAddress] = useState(''); // Адрес покупателя

  const handlePayment = () => {
    // Логика для "оплаты"
    if (name && address) {
      setIsPaid(true);
      clearCart(); // Очищаем корзину после оплаты
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  const total = cart.reduce((total, item) => total + item.price, 0);

  if (isPaid) {
    return (
      <div className="checkout-success">
        <h2>Спасибо за покупку!</h2>
        <p>Ваш заказ оформлен. Мы свяжемся с вами для уточнения деталей.</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Оформление заказа</h2>
      <div className="checkout-details">
        <div>
          <label>
            Ваше имя:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя"
            />
          </label>
        </div>
        <div>
          <label>
            Адрес доставки:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Введите адрес"
            />
          </label>
        </div>
        <div className="checkout-summary">
          <h3>Итого: {total} руб.</h3>
          <button onClick={handlePayment} className="pay-btn">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout; // Экспортируем как default
