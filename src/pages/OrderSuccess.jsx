import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CheckCircle2 } from 'lucide-react';

export default function OrderSuccess({ order }) {
  if (!order) {
    return (
      <main className="page empty-state">
        <h1>No recent order</h1>
        <Link className="btn btn-primary" to="/shop">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="page success">
      <CheckCircle2 size={54} />
      <p className="eyebrow">THANK YOU</p>
      <h1>Order Confirmed</h1>
      <p>Your Anyu-Likha order has been recorded for this session.</p>
      <div className="success-details">
        <div><span>Customer</span><strong>{order.customer.name}</strong></div>
        <div><span>Order Total</span><strong>₱{order.total.toLocaleString()}</strong></div>
        <div><span>Payment</span><strong>{order.customer.payment}</strong></div>
        <div><span>Delivery Address</span><strong>{order.customer.address}</strong></div>
      </div>
      <Link className="btn btn-primary" to="/shop">Continue Shopping</Link>
    </main>
  );
}

OrderSuccess.propTypes = {
  order: PropTypes.shape({
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      payment: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
    total: PropTypes.number.isRequired,
  }),
};
