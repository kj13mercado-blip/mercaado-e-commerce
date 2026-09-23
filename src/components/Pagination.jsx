import PropTypes from 'prop-types';

export default function Pagination({ page, pages, onPage }) {
  if (pages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Product pagination">
      <button disabled={page === 1} onClick={() => onPage(page - 1)}>Previous</button>
      {Array.from({ length: pages }, (_, index) => index + 1).map((number) => (
        <button
          key={number}
          className={number === page ? 'active' : ''}
          aria-current={number === page ? 'page' : undefined}
          onClick={() => onPage(number)}
        >
          {number}
        </button>
      ))}
      <button disabled={page === pages} onClick={() => onPage(page + 1)}>Next</button>
    </nav>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onPage: PropTypes.func.isRequired,
};
