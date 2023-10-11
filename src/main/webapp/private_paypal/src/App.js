import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [accounts, setAccounts] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    fetch("/rest/account").then(Response => Response.json()).then(data => {
        setAccounts(data);
        setLoading(false);
    })
}, []);

if(loading) {
    return <h1>loading...</h1>
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
          {accounts.map(account => <div>{account.username} {account.password}</div>)}
      </body>
    </div>
  );
}

export default App;
