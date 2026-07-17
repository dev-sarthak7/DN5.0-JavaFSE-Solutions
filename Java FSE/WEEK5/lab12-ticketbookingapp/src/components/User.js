import React from 'react';

function User({ onLogout }) {
  return (
    <div>
      <h2>Book Your Flight</h2>
      <ul>
        <li>Flight AI-101: Delhi to Mumbai - Rs. 4500 <button>Book</button></li>
        <li>Flight AI-202: Bangalore to Chennai - Rs. 2500 <button>Book</button></li>
        <li>Flight AI-303: Hyderabad to Pune - Rs. 3200 <button>Book</button></li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default User;
