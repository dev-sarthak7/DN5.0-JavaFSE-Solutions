import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Ravi Kumar" school="Green Valley School" total={425} goal={5} />
    </div>
  );
}

export default App;
