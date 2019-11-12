import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Dashboard from './Dashboard';

const Home = ({ user }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.firestore().collection('/users').doc(user.email).get()
      .then(snapshot => {
        setAppointments(snapshot.data().appointments);
        setLoading(false);
      });
  }, [user.email]);

  return (
    <Dashboard user={user}>
      {!loading ? (
        <>
          <section className="todays">
            <h1>Today's appointments</h1>
            {
              appointments.filter(a => a.status !== 'missed').map(appointment => (
                <article key={Math.random()}>
                  <h1>{appointment.place}</h1>
                  <p>{appointment.info}</p>
                  <p>{appointment.date}</p>
                  <div className="buttons">
                    <button className="done">Done</button>
                    <button className="missed">Missed</button>
                    <button className="delayed">Delayed</button>
                  </div>
                </article>
              ))
            }
          </section>
          <section>
            <h1 className="missed">Missed appointments</h1>
            {
              appointments.filter(a => a.status === 'missed').map(appointment => (
                <article key={Math.random()}>
                  <h1>{appointment.place}</h1>
                  <p>{appointment.info}</p>
                  <p>{appointment.date}</p>
                  <div className="buttons">
                    <button className="done">Reschedule</button>
                  </div>
                </article>
              ))
            }
          </section>
        </>
      ) : 'Loading'}
    </Dashboard>
  )
}

export default Home;
