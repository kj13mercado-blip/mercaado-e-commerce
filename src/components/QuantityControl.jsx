import PropTypes from 'prop-types';

export default function QuantityControl({ qty, onDecrease, onIncrease }) {
  return (
    <div className="quantity" aria-label="Quantity controls">
      <button onClick={onDecrease} aria-label="Decrease quantity">−</button>
      <span aria-live="polite">{qty}</span>
      <button onClick={onIncrease} aria-label="Increase quantity">+</button>
    </div>
  );
}

QuantityControl.propTypes = {
  qty: PropTypes.number.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
};
