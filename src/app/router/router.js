// router.js (или файл с роутером)
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout'; // Путь к компоненту Layout
// import Favorite from '../../components/Favorite/Favorite'; // Путь к компоненту Favorite
import ProductList from '../../components/ProductList/ProductList';
import Bag from '../../components/Bag/Bag';
import ProductDetail from '../../components/ProductDetale/ProductDetale';
import { CartProvider } from '../../app/Context/Context'; // Импортируем CartProvider
import Checkout from '../../components/Checkout/Checkout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CartProvider> {/* Обертываем роутер в CartProvider */}
        <Layout />
      </CartProvider>
    ),
    children: [
      {
        path: '/',
        element: <ProductList />,
      },
      // {
      //   path: '/favorite',
      //   element: <Favorite />,
      // },
      {
        path: '/bag',
        element: <Bag />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/checkout',
        element: <Checkout />, // Новый маршрут для оформления заказа
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
]);
