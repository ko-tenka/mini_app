import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../app/Context/Context'; // Импортируем CartContext
import './Checkout.css';
import emailjs from 'emailjs-com'; // Импортируем EmailJS

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext); // Получаем корзину и функцию очистки
  const [name, setName] = useState(''); // Имя покупателя
  const [address, setAddress] = useState(''); // Адрес покупателя
  const [isDataValid, setIsDataValid] = useState(true); // Статус валидации данных
  const [isConfirmed, setIsConfirmed] = useState(false); // Статус подтверждения данных
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Статус успешной оплаты

  const total = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    // Проверяем параметр в URL
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('paymentSuccess') === 'true') {
      setPaymentSuccess(true);
      clearCart(); // Очищаем корзину после успешной оплаты
    }
  }, [clearCart]);

  const handleConfirm = (e) => {
    e.preventDefault();

    if (!name || !address) {
      setIsDataValid(false); // Если не заполнены поля, показываем ошибку
      return;
    }

    // Создаем объект данных для отправки на email
    const templateParams = {
      name: name,
      address: address,
      totalAmount: total,
    };

    // Отправляем данные на email через EmailJS
    emailjs.send(
      'service_hq40vl9', // Подставь свой Service ID
      'template_us1qc0r', // Подставь свой Template ID
      templateParams,
      '56-10ACDPZfV8wRob' // Подставь свой User ID
    )
      .then((response) => {
        console.log('Email sent successfully', response);
        setIsConfirmed(true); // Подтверждаем, что заказ был оформлен
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  };

  return (
    <div className="checkout">
      <h2>Оформление заказа</h2>
      <div className="checkout-details">
        {!isConfirmed ? (
          <form onSubmit={handleConfirm}>
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

            {!isDataValid && (
              <div style={{ color: 'red', marginTop: '10px' }}>
                Пожалуйста, заполните все поля!
              </div>
            )}

            <div>
              <button type="submit" className="btnOform">Подтвердить данные</button>
            </div>
          </form>
        ) : (
          <div className="checkout-confirmation">
            <h3>Подтверждение заказа</h3>
            <p><strong>Имя:</strong> {name}</p>
            <p><strong>Адрес:</strong> {address}</p>
            <p><strong>Итого:</strong> {total} руб.</p>
            <p>Данные сохранены!</p>
          </div>
        )}

        <div className="checkout-summary">
          <h3>Итого: {total} руб.</h3>
          <div>
            {/* iframe для YooMoney */}
            <iframe
              src={`https://yoomoney.ru/quickpay/fundraise/button?billNumber=1A8RHPGGFHS.250515&successUrl=${window.location.href}?paymentSuccess=true`}
              className="paybtn"
              width="330"
              height="50"
              frameBorder="0"
              allowTransparency="true"
              scrolling="no"
              title="YooMoney Payment Button"
            ></iframe>
          </div>
        </div>
      </div>
      {paymentSuccess && <div className="success-message">Платеж успешно завершен! Корзина очищена.</div>}
    </div>
  );
};

export default Checkout;
