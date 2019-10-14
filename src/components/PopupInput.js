import React from 'react';

const PopupInput = ({ placeholder }) => {
  return (
    <details>
      <summary>Change</summary>
      <input type={/password/.test(placeholder) ? 'password' : 'text'} placeholder={placeholder} />
    </details>
  )
}

export default PopupInput;
