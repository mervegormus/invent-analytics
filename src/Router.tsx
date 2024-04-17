import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

const Products = React.lazy(() => import('./pages/ProductList'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));

const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Products/>}/>
            <Route path="detail/:id" element={<ProductDetail/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;