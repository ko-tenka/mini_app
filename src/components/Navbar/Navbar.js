import './Navbar.css';
import Home from './assets/home.png';
import Heart from './assets/heart.png';
import User from './assets/user.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-item">
        <img src={Home} className="icon" alt="главная" />
        <div>главная</div>
      </div>
      <div className="nav-item">
        <img src={Heart} className="icon" alt="избранное" />
        <div>избранное</div>
      </div>
      <div className="nav-item">
        <img src={User} className="icon" alt="профиль" />
        <div>профиль</div>
      </div>
    </div>
  );
}

export default Navbar;

