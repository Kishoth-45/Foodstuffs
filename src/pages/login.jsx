import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [navigate]);

  const validateForm = () => {
    let formErrors = {};
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
    }
    if (!password) formErrors.password = "Password is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios.post('http://127.0.0.1:3001/login', { email, password })
        .then(result => {
          if (result.data === 'success') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/home');
          } else {
            setBackendErrors('Login failed');
          }
        })
        .catch(err => {
          setBackendErrors(err.response.data.error || 'Login failed');
        });
    }
  };

  return (
    <div className='register-bg'>
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <div><h3>Login</h3></div>
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
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          {backendErrors && <div className='backend-error mt-2'>{backendErrors}</div>}
          <center>
            <button type="submit" className='signin mt-3'>Login</button>
          </center>
        </form>
        <div className='mt-3 navi'>
          Register <Link to='/register' className='navibtn'>Register</Link>
        </div>
      </div>
    </div>
  );
};
