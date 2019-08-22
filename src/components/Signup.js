import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Signup = ({ history, setUser }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    const [name, phone, email, password] = e.target;

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(data => {
        firebase.firestore().collection('/users').doc(email.value).set({
          name: name.value,
          phone: phone.value
        });

        setUser(data.user);
        history.push('/dashboard');
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }

  return (
    <form className="signin-form" onSubmit={handleSignup}>
      <h1>Sign up</h1>
      <p className="error">{error}</p>
      <input type="text" name="name" placeholder="Name" autoComplete="name" />
      <input type="text" name="phone" placeholder="Phone number" autoComplete="phone" />
      <input type="text" name="email" placeholder="Email" autoComplete="username" />
      <input type="password" name="password" placeholder="Password" autoComplete="current-password" />
      <div className="action-buttons">
        <Link to="/">Sign in</Link>
        <button>
          {loading && <div className="loading"></div>}
          Sign up
        </button>
      </div>
    </form>
  )
}

export default Signup;
