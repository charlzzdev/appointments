import React from 'react';
import Dashboard from './Dashboard';
import PopupInput from './PopupInput';

const Settings = ({ user }) => {
  return (
    <Dashboard user={user}>
      <h1>email@email.email</h1>
      <div className="settings">
        <h2>Account settings</h2>
        <div>
          <strong>First name:</strong> John Doe
          <PopupInput placeholder="New name" />
        </div>
        <div>
          <strong>Phone number:</strong> 43278784
          <PopupInput placeholder="New phone #" />
        </div>
        <div>
          <strong>Email:</strong> email@email.email
          <PopupInput placeholder="New email" />
        </div>
        <div>
          <strong>Password:</strong>
          <PopupInput placeholder="New password" />
        </div>
      </div>
    </Dashboard>
  )
}

export default Settings;
