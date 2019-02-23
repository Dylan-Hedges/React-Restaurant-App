import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TopImg from './TopImg.js';
import OurStory from './OurStory.js';

class App extends Component {
  render() {
    return (
      <div>
        <TopImg />
        <OurStory />
      </div>
    );
  }
}

export default App;
