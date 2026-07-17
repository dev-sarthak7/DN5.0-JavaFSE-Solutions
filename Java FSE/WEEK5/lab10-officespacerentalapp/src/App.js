import React from 'react';

const offices = [
  { name: 'Skyline Business Hub', rent: 45000, address: 'MG Road, Bangalore' },
  { name: 'Tech Park Suites', rent: 75000, address: 'Hitech City, Hyderabad' },
  { name: 'Green Valley Offices', rent: 58000, address: 'Baner, Pune' },
  { name: 'City Center Workspace', rent: 90000, address: 'Nariman Point, Mumbai' }
];

function App() {
  // React.createElement() example for the heading
  const heading = React.createElement('h1', null, 'Office Space Rentals');

  const primaryOffice = offices[0];

  return (
    <div className="App">
      {heading}

      <img
        src="https://via.placeholder.com/300x150?text=Office+Space"
        alt="Office Space"
        width="300"
      />

      <h2>{primaryOffice.name}</h2>
      <p>Rent: Rs. {primaryOffice.rent}</p>
      <p>Address: {primaryOffice.address}</p>

      <h3>All Available Offices</h3>
      <ul>
        {offices.map((office, index) => (
          <li key={index}>
            {office.name} -{' '}
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              Rs. {office.rent}
            </span>{' '}
            ({office.address})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
