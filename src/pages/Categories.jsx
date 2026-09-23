import { Link } from 'react-router-dom';
import { categories, products } from '../data/products';

export default function Categories() {
  return (
    <main className="page">
      <div className="page-heading">
        <p className="eyebrow">ROOM BY ROOM</p>
        <h1>Furniture Categories</h1>
        <p className="muted">Discover pieces designed for every part of your home.</p>
      </div>

      <div className="category-showcase category-page-grid">
        {categories.slice(1).map((category) => {
          const product = products.find((item) => item.category === category);
          return (
            <Link key={category} to="/shop" className="category-card">
              <img src={product.image} alt={`${category} furniture`} />
              <span>{category}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
