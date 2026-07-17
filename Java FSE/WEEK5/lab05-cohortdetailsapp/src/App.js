import React from 'react';
import CohortDetails from './components/CohortDetails';
import cohortData from './data/cohorts';

function App() {
  return (
    <div className="App">
      <h1>Academy Cohort Dashboard</h1>
      {cohortData.map((cohort) => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
