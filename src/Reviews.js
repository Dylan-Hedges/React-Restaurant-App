import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';

export default class Reviews extends Component {
  render() {
    return (
      <section id="Reviews">
        <div className="container">
          <h5 className="comp-title">REVIEWS</h5>
          <h2>The Food Network</h2>
          <h4>"Best Restaurant in the L.A area!"</h4>
          <p>Pariatur transferrem hic arbitror, o summis commodo pariatur, doctrina te quis 
          singulis, aut expetendis ea mentitum. Minim ullamco philosophari, eu summis nam
          tempor. De aut labore eiusmod.</p>
          <div className="author"></div>
          <div className="arrows"></div>
        </div>
      </section>
    );
  }
}
