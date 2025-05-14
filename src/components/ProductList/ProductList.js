import React from 'react';
import './ProductList.css';
import ProductItem from "../ProductItems/Productitems";
import { products } from '../../app/ProductData/ProductData';

const ProductList = () => {
    return (
        <div className={'list'}>
            {products.map(item => (
                <div key={item.id} className={'item'}>
                    <ProductItem product={item} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
