import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={`${product.name} furniture`} className="product-image" />
      </Link>
      <div className="product-card-body">
        <p className="eyebrow">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="muted">{product.shortDescription}</p>
        <div className="price-row">
          <strong>₱{product.price.toLocaleString()}</strong>
          <span>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span>
        </div>
        <div className="card-actions">
          <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
          <Button onClick={() => onAdd(product)} disabled={!product.stock}>Add to Cart</Button>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};
