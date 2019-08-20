import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <form className="signin-form">
      <h1>Sign in</h1>
      <input type="text" name="email" placeholder="Email" autoComplete="username" />
      <input type="password" name="password" placeholder="Password" autoComplete="current-password" />
      <div className="action-buttons">
        <Link to="/signup">Sign up</Link>
        <button>Sign in</button>
      </div>
    </form>
  )
}

export default Signin;
