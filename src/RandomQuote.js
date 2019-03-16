import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';
import image4 from './img/4.jpg';

export default class RandomQuote extends Component {
  render() {
    return (
      <section id="RandomQuote" style={{backgroundImage: `linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url(${image4})`}}>
        <div className="container">
          <h1>"We use only the finest meats from local sources cooked to perfection using our unique blend of spices and smoking techniques."</h1>
          <span className="author">- Joe Harrod -</span>
        </div>
      </section>
    );
  }
}
