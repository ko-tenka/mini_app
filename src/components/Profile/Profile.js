import './Profile.css';
import { useEffect, useState } from 'react';

function Profile() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Проверяем, есть ли объект Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      // Получаем информацию о пользователе
      const user = window.Telegram.WebApp.initDataUnsafe;

      // Проверяем, есть ли у пользователя никнейм
      if (user && user.username) {
        setUsername(user.username);
      }
    }
  }, []);

  return (
    <div className="profile">
      <h1>Мой профиль</h1>
      {username ? (
        <p>Никнейм: {username}</p>
      ) : (
        <p>Привет</p>
      )}
    </div>
  );
}

export default Profile;
