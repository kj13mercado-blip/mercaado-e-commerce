import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { categories, products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 6;

export default function Shop({ onAdd }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const shown = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleFilter = (value) => {
    setCategory(value);
    setPage(1);
  };

  return (
    <main className="page shop-page">
      <div className="page-heading">
        <p className="eyebrow">THE COLLECTION</p>
        <h1>Shop Anyu-Likha</h1>
        <p className="muted">Explore handcrafted furniture made for thoughtful spaces.</p>
      </div>

      <div className="shop-tools">
        <SearchBar value={search} onChange={handleSearch} />
        <CategoryFilter categories={categories} selected={category} onChange={handleFilter} />
      </div>

      <ProductGrid products={shown} onAdd={onAdd} />
      <Pagination page={page} pages={pages} onPage={setPage} />
    </main>
  );
}

Shop.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
