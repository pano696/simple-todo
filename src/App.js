import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings'
import SimpleForm from './SimpleForm'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Greetings firstName="Pavel" lastName="Murzagaliev" /> */}
        <SimpleForm />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
