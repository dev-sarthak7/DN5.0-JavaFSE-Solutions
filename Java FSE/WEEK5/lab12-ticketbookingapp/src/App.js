import React, { useState } from 'react';
import Guest from './components/Guest';
import User from './components/User';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Flight Ticket Booking</h1>
      {isLoggedIn ? (
        <User onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Guest onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
