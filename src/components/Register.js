import ReCAPTCHA from 'react-recaptcha'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { registerStart } from '../store/auth/authActions';

const Register = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "", fullname: "", age: "", address: "" });

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let credential in credentials) {
      if(!credentials[credential]){
        return alert('you must provide ' + credential)
      }
      if(!auth.isVerified){
        return alert('please verify you are a human')
      }
    }
    dispatch(registerStart(credentials));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>REGISTER</h2>
      <div>
        <span>
          <input
            placeholder="Email"
            name="email"
            type="text"
            value={credentials.email}
            onChange={handleChange}
          />
        </span>
      </div>
      <div>
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
      <div>
        <span>
          <input
            placeholder="Full Name"
            name="fullname"
            type="text"
            value={credentials.fullname}
            onChange={handleChange}
          />
        </span>
      </div>
      <div>
        <span>
          <input
            placeholder="Age"
            name="age"
            type="number"
            min="0"
            value={credentials.age}
            onChange={handleChange}
          />
        </span>
      </div>
      <div>
        <span>
          <input
            placeholder="Address"
            name="address"
            type="text"
            value={credentials.address}
            onChange={handleChange}
          />
        </span>
      </div>
      <div><button type="submit">Create Account</button></div>
      <Link to='/login'>Login</Link>
    </form>
    <ReCAPTCHA
      elementID="recaptcha"
      sitekey="6LcWG94ZAAAAAGMHgaZm2417t-3s6CEFFLAXzPxX"
      verifyCallback={()=>{auth.isVerified = true}}
    />
    </div>
  );
};

export default Register;
