import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <p className="intro-text">
          This is a redesign of Goodreads with React
        </p>
      </div>
    );
  }
}

export default App;
