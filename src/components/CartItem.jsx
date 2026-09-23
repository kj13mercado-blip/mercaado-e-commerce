import PropTypes from 'prop-types';
import QuantityControl from './QuantityControl';

export default function CartItem({ item, onQty, onRemove }) {
  const subtotal = item.price * item.qty;
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-info">
        <p className="eyebrow">{item.category}</p>
        <h3>{item.name}</h3>
        <p>₱{item.price.toLocaleString()} each</p>
        <QuantityControl
          qty={item.qty}
          onIncrease={() => onQty(item.id, 1)}
          onDecrease={() => onQty(item.id, -1)}
        />
        <button className="text-button" onClick={() => onRemove(item.id)}>Remove</button>
      </div>
      <strong>₱{subtotal.toLocaleString()}</strong>
    </article>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
  }).isRequired,
  onQty: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
