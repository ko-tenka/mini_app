import './Profile.css';
import { useEffect, useState } from 'react';

function Profile() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Статус загрузки

  useEffect(() => {
    // Проверяем, есть ли объект Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      // Получаем данные о пользователе
      const user = window.Telegram.WebApp.initDataUnsafe;

      if (user && user.username) {
        setUsername(user.username);  // Устанавливаем никнейм, если он существует
      }

      // Устанавливаем статус загрузки как завершённый
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="profile">
      <h1>Мой профиль</h1>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : username ? (
        <p>Никнейм: {username}</p>
      ) : (
        <p>Привет</p>
      )}
    </div>
  );
}

export default Profile;
