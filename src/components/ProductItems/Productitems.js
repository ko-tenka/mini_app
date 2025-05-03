import React from 'react';
import './ProductItems.css';

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd && onAdd(product); // добавил проверку на наличие onAdd
    }

    return (
        <div className={'product ' + className}>
            {product.img && (
                <img src={product.img} alt={product.title} className="img" />
            )}
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <button className={'add-btn'} onClick={onAddHandler}> 
                Добавить в корзину
            </button>
        </div>
    );
};

export default ProductItem;
