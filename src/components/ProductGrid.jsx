import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAdd }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <h3>No pieces found</h3>
        <p>Try another search or category.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAdd: PropTypes.func.isRequired,
};
