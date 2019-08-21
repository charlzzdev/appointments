import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const Signin = ({ history, setUser }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const [email, password] = e.target;
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(data => {
        setLoading(false);
        setUser(data.user);
        history.push('/dashboard');
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }

  return (
    <form className="signin-form" onSubmit={handleLogin}>
      <h1>Sign in</h1>
      <p className="error">{error}</p>
      <input type="text" name="email" placeholder="Email" autoComplete="username" />
      <input type="password" name="password" placeholder="Password" autoComplete="current-password" />
      <div className="action-buttons">
        <Link to="/signup">Sign up</Link>
        <button>
          {loading && <div className="loading"></div>}
          Sign in
        </button>
      </div>
    </form>
  )
}

export default Signin;
