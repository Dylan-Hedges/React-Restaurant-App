import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';

export default class RandomQuote extends Component {
  render() {
    return (
      <section id="RandomQuote" style={{backgroundImage: 'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url("http://www.colonelsretreat.com/system/special_slider/cooking.png")'}}>
        <div className="container">
          <h1>"Simple ingredients prepared in a simple way - that's the best way to take your everyday cooking to a higher level."</h1>
          <span className="author">- John Harrod -</span>
        </div>
      </section>
    );
  }
}
