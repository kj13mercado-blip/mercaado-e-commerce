import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout({ cart, total, onCheckout }) {
  if (!cart.length) return <Navigate to="/cart" replace />;

  return (
    <main className="page checkout">
      <div>
        <p className="eyebrow">FINAL DETAILS</p>
        <h1>Checkout</h1>
        <p>Complete your delivery details. Payment is made upon delivery.</p>
        <CheckoutForm onSubmit={onCheckout} />
      </div>
      <aside className="order-summary">
        <h2>Your Order</h2>
        {cart.map((item) => (
          <div key={item.id}>
            <span>{item.name} × {item.qty}</span>
            <strong>₱{(item.price * item.qty).toLocaleString()}</strong>
          </div>
        ))}
        <div className="summary-total">
          <span>Total</span>
          <strong>₱{total.toLocaleString()}</strong>
        </div>
      </aside>
    </main>
  );
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  onCheckout: PropTypes.func.isRequired,
};
