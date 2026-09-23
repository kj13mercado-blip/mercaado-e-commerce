import { useMemo, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';

export default function App() {
  const [cart, setCart] = useState([]);
  const [successOrder, setSuccessOrder] = useState(null);
  const navigate = useNavigate();

  const handleAdd = (product, qty = 1) => {
    setCart((items) => {
      const found = items.find((item) => item.id === product.id);
      if (found) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, qty: Math.min(product.stock, item.qty + qty) }
            : item
        );
      }
      return [...items, { ...product, qty: Math.min(qty, product.stock) }];
    });
  };

  const handleQty = (id, change) => {
    setCart((items) =>
      items.map((item) => {
        if (item.id !== id) return item;
        const qty = Math.max(1, Math.min(item.stock, item.qty + change));
        return { ...item, qty };
      })
    );
  };

  const handleRemove = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };

  const count = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const handleCheckout = (form) => {
    const order = {
      customer: form,
      items: cart.map((item) => ({ ...item })),
      total,
    };
    setSuccessOrder(order);
    setCart([]);
    navigate('/order-success');
  };

  return (
    <div className="app">
      <Navbar count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop onAdd={handleAdd} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetails onAdd={handleAdd} />} />
        <Route path="/cart" element={<Cart cart={cart} onQty={handleQty} onRemove={handleRemove} total={total} />} />
        <Route path="/checkout" element={<Checkout cart={cart} total={total} onCheckout={handleCheckout} />} />
        <Route path="/order-success" element={<OrderSuccess order={successOrder} />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
