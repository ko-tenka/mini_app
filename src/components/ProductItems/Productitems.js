import React from 'react';
import './ProductItems.css';
import Heart from './assets/heart.png'
import { Link } from 'react-router-dom';

const ProductItem = ({product, className, onAdd}) => {

    return (
        <div className={'product ' + className}>
            <div className='image-wrapper'>
                {product.img && (
                    <img src={product.img} alt={product.title} className="img" />
                )}
                <img src={Heart} alt="heart" className="heart" />
            </div>      
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Link to={`/product/${product.id}`} className="add-btn">
                        Подробнее
            </Link>
        </div>
    );
};

export default ProductItem;
