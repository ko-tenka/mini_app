import './Navbar.css';
import Home from './assets/home.png';
import Heart from './assets/heart.png';
import User from './assets/user.png';
import Bag from './assets/bag.png';

import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="navbar">

        <button onClick={() => navigate('/')} className="nav-item">
            <img src={Home} className="icon" alt="главная" />
            <div>главная</div>
        </button>

        <button onClick={() => navigate('/favorite')} className="nav-item">
            <img src={Heart} className="icon" alt="избранное" />
            <div>избранное</div>
        </button>

        <button onClick={() => navigate('/bag')} className="nav-item">
            <img src={Bag} className="icon" alt="избранное" />
            <div>корзина</div>
        </button>

        <button className="nav-item">
            <img src={User} className="icon" alt="профиль" />
            <div>профиль</div>
        </button>
    </div>
  );
}

export default Navbar;

