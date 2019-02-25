import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TopImg from './TopImg.js';
import OurStory from './OurStory.js';
import SpecialMenu from './SpecialMenu.js';

class App extends Component {
  render() {
    return (
      <div>
        <TopImg />
        <OurStory />
        <SpecialMenu />
      </div>
    );
  }
}

export default App;
