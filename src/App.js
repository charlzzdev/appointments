import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyDnFMRFkcihqhW_O9hNtAff24PdnJxrmkI",
  authDomain: "appointments-charleseller.firebaseapp.com",
  databaseURL: "https://appointments-charleseller.firebaseio.com",
  projectId: "appointments-charleseller",
  storageBucket: "",
  messagingSenderId: "878308422562",
  appId: "1:878308422562:web:73fc8785d6c50c18"
});

function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Route exact path="/" component={({ history }) => <Signin history={history} setUser={setUser} />} />
      <Route exact path="/signup" component={({ history }) => <Signup history={history} setUser={setUser} />} />
      <Route exact path="/dashboard" component={() => <Home user={user} />} />
      <Route exact path="/dashboard/profile" component={() => <Profile user={user} />} />
      <Route exact path="/dashboard/settings" component={() => <Settings user={user} />} />
    </BrowserRouter>
  );
}

export default App;
