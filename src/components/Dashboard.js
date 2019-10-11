import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { MenuIcon } from '../icons';

const Dashboard = ({ user, children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    let startTouch;
    document.addEventListener('touchstart', e => startTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY });
    document.addEventListener('touchmove', e => {
      const movingTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      if (movingTouch.y > startTouch.y - 50 && movingTouch.y < startTouch.y + 50) {
        if (movingTouch.x > startTouch.x + 100) {
          isSubscribed && setOpenSidebar(true);
        } else if (movingTouch.x < startTouch.x - 100) {
          isSubscribed && setOpenSidebar(false);
        }
      }
    });

    return () => isSubscribed = false;
  }, []);

  if (!user.email) return <Redirect to="/" />;

  return (
    <div className="dashboard">
      <aside className={`sidebar ${openSidebar && 'open'}`}>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/">Logout</Link>
      </aside>
      <header className="header">
        <div className="menuicon-wrapper" onClick={() => setOpenSidebar(!openSidebar)}><MenuIcon /></div>
        Appointments - Manage your appointments efficiently
      </header>
      <main className="content">
        {children}
      </main>
    </div>
  )
}

export default Dashboard;
