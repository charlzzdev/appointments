import React from 'react';
import Dashboard from './Dashboard';

const Home = ({ user }) => {
  return (
    <Dashboard user={user}>
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
    </Dashboard>
  )
}

export default Home;
