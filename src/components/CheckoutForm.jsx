import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
  payment: 'Cash on Delivery',
};

export default function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!/^[A-Za-zÀ-ÿ.' -]{2,}(?:\s+[A-Za-zÀ-ÿ.' -]{2,})+$/u.test(form.name.trim())) {
      next.name = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) {
      next.phone = 'Please enter a valid phone number (10–13 digits).';
    }
    if (form.address.trim().length < 8) {
      next.address = 'Please enter a complete delivery address.';
    }
    if (!form.payment) {
      next.payment = 'Payment method is required.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) onSubmit(form);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit} noValidate>
      <Field label="Full Name" name="name" value={form.name} onChange={handleChange} error={errors.name} required minLength={5} />
      <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} required />
      <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} required inputMode="tel" minLength={10} maxLength={16} />

      <label className="field">
        Delivery Address
        <textarea name="address" value={form.address} onChange={handleChange} required minLength={8} aria-invalid={!!errors.address} aria-describedby="address-error" />
        {errors.address && <span id="address-error" className="error">{errors.address}</span>}
      </label>

      <label className="field">
        Payment Method
        <select name="payment" value={form.payment} onChange={handleChange} required aria-invalid={!!errors.payment}>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
        {errors.payment && <span className="error">{errors.payment}</span>}
      </label>

      <Button type="submit" className="full">Place Order</Button>
    </form>
  );
}

function Field({ label, error, ...props }) {
  const id = `${props.name}-error`;
  return (
    <label className="field">
      {label}
      <input {...props} aria-invalid={!!error} aria-describedby={error ? id : undefined} />
      {error && <span id={id} className="error">{error}</span>}
    </label>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  inputMode: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

CheckoutForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
