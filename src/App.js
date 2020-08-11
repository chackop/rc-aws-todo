import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Auth.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This a AWS Test App</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
