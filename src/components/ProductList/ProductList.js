import './ProductList.css';
import ProductItem from "../ProductItems/Productitems";
import Dress1 from "./assets/dress1.jpg"
import Dress2 from "./assets/dress2.jpg"
import Dress3 from "./assets/dress3.jpg"
import Dress4 from "./assets/dress4.jpg"
import Dress5 from "./assets/dress5.jpg"
import Dress6 from "./assets/dress6.jpg"
import Dress7 from "./assets/dress7.jpg"
import Dress8 from "./assets/dress8.jpg"
import Dress9 from "./assets/dress9.jpg"

const products = [
    {id: '1', img: Dress1, title: 'Платье ', price: 5000, description: 'Желтого цвета, мини'},
    {id: '2', img: Dress2, title: 'Платье', price: 12000, description: 'Белого цвета, мини'},
    {id: '3', img: Dress3, title: 'Платье', price: 5000, description: 'Розового цвета, длинное'},
    {id: '4', img: Dress4, title: 'Платье', price: 122, description: 'Коричневого цвета, мини'},
    {id: '5', img: Dress5, title: 'Платье', price: 5000, description: 'Зеленого цвета, длинное'},
    {id: '6', img: Dress6, title: 'Платье', price: 600, description: 'Белого цвета, длинное'},
    {id: '7', img: Dress7, title: 'Костюм', price: 5500, description: 'Белого цвета, шортами'},
    {id: '8', img: Dress8, title: 'Костюм', price: 12000, description: 'Зеленого цвета, штанами'},
    {id: '9', img: Dress9, title: 'Платье', price: 12000, description: 'Белого цвета, короткое'},
]

const ProductList = () => {
    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;