import { useState } from 'react';
import catImage from './Cat.JPG';
import './Cat.css'

function Cat() {

    const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="cont">
        <div>
            Вот такую штучку сделала!
        </div>
        <div>
            <img src={catImage} className="cat" alt="Котик" />
        </div>  
        <div className='message'>
            {showMessage && <div className="message">Доброе утро!</div>}
        </div>
        <div>
            <button onClick={() => setShowMessage(true)} className="btn">
                Показать приветствие
            </button>
        </div>

    </div>
  );
}

export default Cat;
