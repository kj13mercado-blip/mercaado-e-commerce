import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">CRAFTED FOR YOUR SPACE</p>
          <h1>Furniture with a story.</h1>
          <p>
            Handcrafted pieces where Filipino warmth, thoughtful materials,
            and modern editorial design meet.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/shop">
              Explore Collection <ArrowRight size={17} />
            </Link>
            <Link className="btn btn-secondary" to="/categories">
              View Categories
            </Link>
          </div>
        </div>
        <img src={products[3].image} alt="Hiraya handcrafted dining table" />
      </section>

      <section className="craft section">
        <img src={products[6].image} alt="Lakbay handcrafted lounge chair" />
        <div>
          <p className="eyebrow">CRAFTED WITH INTENTION</p>
          <h2>Made to belong for years.</h2>
          <p>
            Anyu-Likha celebrates considered proportions, quality materials,
            and the quiet marks of human craft. Each piece is imagined as part
            of a home—not simply an object inside it.
          </p>
          <Link className="btn btn-secondary" to="/about">Our Story</Link>
        </div>
      </section>
    </main>
  );
}
