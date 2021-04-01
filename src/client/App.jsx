import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactImage from './images/react.png';
import './styles/app.css';
import Example from './components/Example';

const App = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => setUsername(user.username));
  });

  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <img src={ReactImage} alt="react" />
      <Example />
    </div>
  );
};

// Rendering the entire react application
ReactDOM.render(<App />, document.getElementById('root'));
