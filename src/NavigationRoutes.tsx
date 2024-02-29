import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Products } from './pages';
import { Layout } from './layout/Layout';

export default function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
