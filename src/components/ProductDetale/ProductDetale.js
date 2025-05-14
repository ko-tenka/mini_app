// components/ProductDetale/ProductDetale.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../app/Context/Context';  // Импортируем CartContext
import './ProductDetale.css';
import { products } from '../../app/ProductData/ProductData';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(item => item.id === id);
    const { addToCart } = useContext(CartContext);  // Используем контекст для добавления товара в корзину

    if (!product) {
        return <div>Товар не найден</div>;
    }

    return (
        <div className="product-detail">
            <img src={product.img} alt={product.title} className="product-image" />
            <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Цена: {product.price} руб.</p>
                <button onClick={() => addToCart(product)}>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default ProductDetail;
