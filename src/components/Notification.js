import React from 'react';

const Notification = ({ type, msg }) => {
  return (
    <div className={`notification ${type}`}>
      {msg}
    </div>
  )
}

export default Notification;
