import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

export default function Cart({ cart, onQty, onRemove, total }) {
  if (!cart.length) {
    return (
      <main className="page empty-state">
        <p className="eyebrow">YOUR CART</p>
        <h1>Your room is still waiting.</h1>
        <p>Add a handcrafted piece from the collection.</p>
        <Link className="btn btn-primary" to="/shop">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-layout">
        <section>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onQty={onQty} onRemove={onRemove} />
          ))}
        </section>
        <aside className="order-summary">
          <h2>Order Summary</h2>
          <div><span>Subtotal</span><strong>₱{total.toLocaleString()}</strong></div>
          <div className="summary-total"><span>Total</span><strong>₱{total.toLocaleString()}</strong></div>
          <Link className="btn btn-primary full" to="/checkout">Proceed to Checkout</Link>
          <Link className="text-link" to="/shop">Continue Shopping</Link>
        </aside>
      </div>
    </main>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  onQty: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
