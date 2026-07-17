import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';

const gitClient = new GitClient();

function App() {
  const [repos, setRepos] = useState([]);
  const [username] = useState('techiesyed');

  useEffect(() => {
    gitClient
      .getRepositories(username)
      .then((repoNames) => setRepos(repoNames))
      .catch((error) => console.error('Error fetching repositories:', error));
  }, [username]);

  return (
    <div className="App">
      <h1>GitHub Repositories for {username}</h1>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
