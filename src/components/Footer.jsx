import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2>ANYU-LIKHA</h2>
          <p>Every Carv Tells a Story.</p>
          <p>Handcrafted furniture shaped by Filipino warmth and modern living.</p>
        </div>
        <div>
          <h3>Navigate</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          <h3>Categories</h3>
          <p>Living Room · Dining · Bedroom · Office · Outdoor</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>hello@anyu-likha.example<br />Metro Manila, Philippines</p>
        </div>
      </div>
      <p className="copyright">© 2026 Anyu-Likha. Academic front-end project.</p>
    </footer>
  );
}
