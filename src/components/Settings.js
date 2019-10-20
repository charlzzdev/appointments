import React from 'react';
import Dashboard from './Dashboard';

const Settings = ({ user }) => {
  return (
    <Dashboard user={user}>
      <h1>email@email.email</h1>
      <div className="settings">
        <h2>Account settings</h2>
        <div className="with-label">
          <input id="name" defaultValue="John Doe" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="with-label">
          <input id="number" defaultValue="3747734283" />
          <label htmlFor="number">Phone number</label>
        </div>
        <div className="with-label">
          <input id="email" defaultValue="email@email.email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="with-label">
          <input placeholder="New password" type="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
    </Dashboard>
  )
}

export default Settings;
