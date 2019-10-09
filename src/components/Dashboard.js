import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  if (!user.email) return <Redirect to="/" />;

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/">Logout</Link>
      </aside>
      <header className="header">Appointments - Manage your appointments efficiently</header>
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
