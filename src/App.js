import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards'
import Graph from './components/Graph'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p className = "Title">
            <img src={logo} className="App-logo" alt="logo" />
            NYC Budget Data Visualization
          </p>
        </header>
        <Cards />
        <Graph />
      </div>
    );
  }
}

export default App;
