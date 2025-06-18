import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayouts';
import Item from '../pages/Item';
import Category from '../pages/Category';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/productos/:id',
                element: <Item />,
            },
            {
                path: '/categorias/:id',
                element: <Category />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/checkout',
                element: <Checkout />,
            },
            {
                path: "*",
                element: <NotFound />,
            }  
        ]
    },
];

export const router = createBrowserRouter(routes);
