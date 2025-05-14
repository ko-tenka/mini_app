import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout'; // Путь к компоненту Layout
import Favorite from '../../components/Favorite/Favorite'; // Путь к компоненту Favorite
import ProductList from '../../components/ProductList/ProductList';
import Bag from '../../components/Bag/Bag';
import ProductDetail from '../../components/ProductDetale/ProductDetale';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ProductList />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
      {
        path: '/bag',
        element: <Bag />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
]);

