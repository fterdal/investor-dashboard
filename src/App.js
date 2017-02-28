import React, { Component } from 'react';
import logo from './logo.svg';
import investors from '../data.json'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello, React!</p>
        <p>Here's an investor:</p>
        <p>{investors[0].first_name} {investors[0].last_name}</p>
      </div>
    );
  }
}

export default App;
