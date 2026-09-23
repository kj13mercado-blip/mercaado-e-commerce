import PropTypes from 'prop-types';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <label className="search">
      <Search size={18} />
      <span className="sr-only">Search products</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by product name…"
        aria-label="Search products by name"
      />
    </label>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
