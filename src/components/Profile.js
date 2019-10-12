import React from 'react';
import Dashboard from './Dashboard';

const Profile = ({ user }) => {
  return (
    <Dashboard user={user}>
      <div className="upper-profile">
        <img src="https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png" alt="Profile" />
        <h1>John Doe</h1>
      </div>
      <textarea placeholder="Bio"></textarea>
      <input type="text" placeholder="Location" />
    </Dashboard>
  )
}

export default Profile;
