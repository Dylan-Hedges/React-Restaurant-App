import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TopImg from './TopImg.js';
import OurStory from './OurStory.js';
import SpecialMenu from './SpecialMenu.js';
import RandomQuote from './RandomQuote.js';
import Reviews from './Reviews.js';
import ContactUs from './ContactUs.js';
import Footer from './Footer.js';
import data from './data.js';

class App extends Component {
  render() {
    return (
      <div>
        <TopImg data={data}/>
        <OurStory data={data}/>
        <SpecialMenu data={data}/>
        <RandomQuote data={data}/>
        <Reviews data={data}/>
        <ContactUs data={data}/>
        <Footer data={data}/>
      </div>
    );
  }
}

export default App;
