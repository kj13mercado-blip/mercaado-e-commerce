import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { products } from '../data/products';
import QuantityControl from '../components/QuantityControl';
import Button from '../components/Button';

export default function ProductDetails({ onAdd }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <main className="page empty-state">
        <h1>Product not found</h1>
        <Link className="btn btn-primary" to="/shop">Return to collection</Link>
      </main>
    );
  }

  return (
    <main className="page product-detail">
      <div className="detail-image">
        <img src={product.image} alt={`${product.name} furniture`} />
      </div>
      <div className="detail-copy">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="detail-price">₱{product.price.toLocaleString()}</p>
        <p className="stock">{product.stock} pieces available</p>
        <p>{product.description}</p>
        <dl>
          <div><dt>Material</dt><dd>{product.material}</dd></div>
          <div><dt>Dimensions</dt><dd>{product.dimensions}</dd></div>
          <div><dt>Finish</dt><dd>{product.finish}</dd></div>
        </dl>
        <div className="detail-actions">
          <QuantityControl
            qty={qty}
            onDecrease={() => setQty((value) => Math.max(1, value - 1))}
            onIncrease={() => setQty((value) => Math.min(product.stock, value + 1))}
          />
          <Button onClick={() => onAdd(product, qty)}>Add {qty} to Cart</Button>
        </div>
      </div>
    </main>
  );
}

ProductDetails.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
