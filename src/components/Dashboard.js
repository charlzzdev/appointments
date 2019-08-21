import React from 'react';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ user }) => {
  if (!user.email) return <Redirect to="/" />;

  return (
    <div>
      dashboard for {user.email}
    </div>
  )
}

export default Dashboard;
