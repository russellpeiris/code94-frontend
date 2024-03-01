import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Favorites, Home, ProductForm, Products } from './pages';

export default function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/favorites" element={<Favorites />} />
          <Route path="/products/add-products" element={<ProductForm />} />
          <Route path="/products/edit-product/:sku" element={<ProductForm isEditing={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
