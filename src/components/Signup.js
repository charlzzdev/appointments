import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <form className="signin-form">
      <h1>Sign up</h1>
      <input type="text" name="name" placeholder="Name" autoComplete="name" />
      <input type="text" name="phone" placeholder="Phone number" autoComplete="phone" />
      <input type="text" name="email" placeholder="Email" autoComplete="username" />
      <input type="password" name="password" placeholder="Password" autoComplete="current-password" />
      <div className="action-buttons">
        <Link to="/">Sign in</Link>
        <button>Sign up</button>
      </div>
    </form>
  )
}

export default Signup;
