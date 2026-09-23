import { products } from '../data/products';

export default function About() {
  return (
    <main className="page about-page">
      <div className="page-heading">
        <p className="eyebrow">OUR STORY</p>
        <h1>Crafted with intention.</h1>
      </div>

      <section className="craft about-craft">
        <img src={products[7].image} alt="Bahandi handcrafted cabinet" />
        <div>
          <h2>Filipino warmth, modern living.</h2>
          <p>
            Anyu-Likha brings together handcrafted character, thoughtful materials,
            and timeless forms. Our collection is designed to feel at home in modern
            spaces while celebrating the warmth and detail of Filipino craftsmanship.
          </p>
          <p>
            Every piece focuses on useful proportions, lasting materials, and a quiet
            visual identity that lets the furniture become part of everyday life.
          </p>
        </div>
      </section>
    </main>
  );
}
