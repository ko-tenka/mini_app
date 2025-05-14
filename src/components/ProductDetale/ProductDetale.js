import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../app/ProductData/ProductData';  // Импортируем массив продуктов
import './ProductDetale.css';

const ProductDetail = () => {
    const { id } = useParams(); // получаем id из URL
    const product = products.find(item => item.id === id);

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
            </div>
        </div>
    );
};

export default ProductDetail;
