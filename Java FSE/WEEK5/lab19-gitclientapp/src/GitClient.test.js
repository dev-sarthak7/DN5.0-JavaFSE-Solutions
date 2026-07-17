import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const mockData = {
      data: [
        { name: 'react-app' },
        { name: 'spring-boot-demo' },
        { name: 'docker-samples' }
      ]
    };

    axios.get.mockResolvedValue(mockData);

    const gitClient = new GitClient();
    const repos = await gitClient.getRepositories('techiesyed');

    expect(repos).toEqual(['react-app', 'spring-boot-demo', 'docker-samples']);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
