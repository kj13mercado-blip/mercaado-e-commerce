import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import PropTypes from 'prop-types';
import CartCounter from './CartCounter';

export default function Navbar({ count }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}>
          ANYU-LIKHA
          <span>Every Carv Tells a Story.</span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/shop" onClick={close}>Shop</NavLink>
          <NavLink to="/categories" onClick={close}>Categories</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
        </nav>

        <Link to="/cart" className="cart-link" aria-label={`Cart with ${count} items`}>
          <ShoppingBag />
          <CartCounter count={count} />
        </Link>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  count: PropTypes.number.isRequired,
};
