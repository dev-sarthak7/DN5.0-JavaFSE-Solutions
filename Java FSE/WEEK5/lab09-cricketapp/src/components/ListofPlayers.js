import React from 'react';

const players = [
  { name: 'Rohit', score: 85 },
  { name: 'Virat', score: 92 },
  { name: 'Rahul', score: 45 },
  { name: 'Surya', score: 60 },
  { name: 'Hardik', score: 30 },
  { name: 'Jadeja', score: 55 },
  { name: 'Bumrah', score: 12 },
  { name: 'Shami', score: 8 },
  { name: 'Ashwin', score: 25 },
  { name: 'Pant', score: 78 },
  { name: 'Gill', score: 90 }
];

function ListofPlayers() {
  // ES6 map()
  const playerList = players.map((player) => `${player.name} (${player.score})`);

  // ES6 arrow function + filter
  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {playerList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
