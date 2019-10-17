import React, { useState } from 'react';
import Notification from './Notification';

const PopupInput = ({ placeholder }) => {
  const [notificationActive, setNotificationActive] = useState(false);

  const clickedChange = () => {
    setNotificationActive(true);
    setTimeout(() => {
      setNotificationActive(false);
    }, 5000);
  }

  return (
    <>
      {notificationActive && <Notification type="success" msg="Clicked on change" />}
      <details>
        <summary onClick={clickedChange}>Change</summary>
        <input type={/password/.test(placeholder) ? 'password' : 'text'} placeholder={placeholder} />
      </details>
    </>
  )
}

export default PopupInput;
