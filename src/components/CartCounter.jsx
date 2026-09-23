import PropTypes from 'prop-types';

export default function CartCounter({ count }) {
  return <span className="cart-count" aria-label={`${count} items in cart`}>{count}</span>;
}

CartCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
