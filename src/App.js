import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
