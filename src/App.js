import * as React from 'react';

import { UserProfile, Layout, LoadingSpinner } from 'src/components';

import './styles/global.scss';

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const url = 'https://randomuser.me/api/?results=5';
      try {
        const response = await fetch(url, { method: 'GET' });
        const { results } = await response.json();
        setUsers(results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  if (!isLoaded) {
    return (
      <div className="spinner__wrapper">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Layout>
      <div className="users-list">
        {users.map((user, index) => (
          <UserProfile key={index} user={user} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
