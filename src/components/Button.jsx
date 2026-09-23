import PropTypes from 'prop-types';

export default function Button({ children, type = 'button', variant = 'primary', className = '', ...props }) {
  return (
    <button type={type} className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
};
