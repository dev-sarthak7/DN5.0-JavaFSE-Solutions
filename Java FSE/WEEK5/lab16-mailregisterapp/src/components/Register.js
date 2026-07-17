import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (value.length < 5) {
        error = 'Name should have at least 5 characters';
      }
    } else if (name === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        error = 'Email should contain @ and .';
      }
    } else if (name === 'password') {
      if (value.length < 8) {
        error = 'Password should have at least 8 characters';
      }
    }
    return error;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password)
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== '');
    if (!hasErrors) {
      alert('Registration successful!');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>Email: </label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
