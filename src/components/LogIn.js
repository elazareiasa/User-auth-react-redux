import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import { logInStart } from '../store/auth/authActions';

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInStart(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>LOGIN</h2>
      <div className="field">
          <span>
            <input
              placeholder="Email"
              name="email"
              type="text"
              value={credentials.email}
              onChange={handleChange}
            />
          </span>
      </div >
      <div className="field">
          <span>
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </span>
      </div>
      <button type="submit">Log In</button>
      <div>
        <Link to='/'>Don't have account yet?</Link>
      </div>
    </form>
  );
};

export default LogIn;
