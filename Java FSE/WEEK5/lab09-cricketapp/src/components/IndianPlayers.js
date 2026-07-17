import React from 'react';

const team = {
  oddTeamPlayer: 'Virat Kohli',
  evenTeamPlayer: 'Rohit Sharma'
};

const t20Players = ['Rohit', 'Virat', 'Surya', 'Bumrah'];
const ranjiTrophyPlayers = ['Prithvi', 'Mayank', 'Shreyas'];

function IndianPlayers() {
  // ES6 destructuring
  const { oddTeamPlayer, evenTeamPlayer } = team;

  // ES6 merge (spread operator)
  const allPlayers = [...t20Players, ...ranjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>
      <p>Odd Team Player: {oddTeamPlayer}</p>
      <p>Even Team Player: {evenTeamPlayer}</p>

      <h3>Merged T20 + Ranji Trophy Players</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
