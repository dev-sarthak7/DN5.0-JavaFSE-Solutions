import React from 'react';

function Guest({ onLogin }) {
  return (
    <div>
      <h2>Flight Details</h2>
      <ul>
        <li>Flight AI-101: Delhi to Mumbai - Rs. 4500</li>
        <li>Flight AI-202: Bangalore to Chennai - Rs. 2500</li>
        <li>Flight AI-303: Hyderabad to Pune - Rs. 3200</li>
      </ul>
      <p>Please log in to book tickets.</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default Guest;
