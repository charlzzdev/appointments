import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { MenuIcon } from '../icons';

const Dashboard = ({ user }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    let startTouch;
    document.addEventListener('touchstart', e => startTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY });
    document.addEventListener('touchmove', e => {
      const movingTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      if (movingTouch.y > startTouch.y - 50 && movingTouch.y < startTouch.y + 50) {
        if (movingTouch.x > startTouch.x + 100) {
          setOpenSidebar(true);
        } else if (movingTouch.x < startTouch.x - 100) {
          setOpenSidebar(false);
        }
      }
    });
  }, []);

  if (!user.email) return <Redirect to="/" />;

  return (
    <div className="dashboard">
      <aside className={`sidebar ${openSidebar && 'open'}`}>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/">Logout</Link>
      </aside>
      <header className="header">
        <div className="menuicon-wrapper" onClick={() => setOpenSidebar(!openSidebar)}><MenuIcon /></div>
        Appointments - Manage your appointments efficiently
      </header>
      <main className="content">
        <section className="todays">
          <h1>Today's appointments</h1>
          <article>
            <h1>Place name</h1>
            <p>Appointment info</p>
            <p>{new Date().toLocaleString()}</p>
            <div className="buttons">
              <button className="done">Done</button>
              <button className="missed">Missed</button>
              <button className="delayed">Delayed</button>
            </div>
          </article>
          <article>
            <h1>Place name</h1>
            <p>Appointment info</p>
            <p>{new Date().toLocaleString()}</p>
            <div className="buttons">
              <button className="done">Done</button>
              <button className="missed">Missed</button>
              <button className="delayed">Delayed</button>
            </div>
          </article>
        </section>
        <section>
          <h1 className="missed">Missed appointments</h1>
          <article>
            <h1>Place name</h1>
            <p>Appointment info</p>
            <p>{new Date().toLocaleString()}</p>
            <div className="buttons">
              <button className="done">Reschedule</button>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Dashboard;
