import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import TopImg from './TopImg.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopImg />
      </div>
    );
  }
}

export default App;
