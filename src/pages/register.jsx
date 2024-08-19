import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required.";
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
    }
    if (!password) formErrors.password = "Password is required.";
    if (!confirmPassword) {
      formErrors.confirmPassword = "Confirm password is required.";
    } else if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const result = await axios.post('http://127.0.0.1:3001/register', { name, email, password });
        if (result.data.token) { // Expecting a token from the server
          localStorage.setItem('token', result.data.token); // Store the token
          localStorage.setItem('isAuthenticated', 'true'); // Optionally, set authentication status
        } else {
          setBackendErrors('Registration failed');
        }
      } catch (err) {
        setBackendErrors(err.response.data.error || 'Registration failed');
      }
      navigate('/home');
    }
  };

  return (
    <div className='register-bg'>
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <div><h3>Register</h3></div>
          <div className='mt-2'>
            <h4>Name</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className='mt-2'>
            <h4>Email</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className='mt-2'>
            <h4>Enter New Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className='mt-2'>
            <h4>Confirm Password</h4>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>
          {backendErrors && <div className='backend-error mt-2'>{backendErrors}</div>}
          <center>
            <button type="submit" className='signin mt-3'>Sign up</button>
          </center>
        </form>
        <div className='mt-3 navi'>
          Already Have an Account <Link to='/' className='navibtn'>Login</Link>
        </div>
      </div>
    </div>
  );
};
