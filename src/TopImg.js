import React, { Component } from 'react';
import './App.css';

export default class TopImg extends Component {
  render() {
    return (
      <section className="TopImg">
        <div className="title">
          <h5>
            Welcome
          </h5>
          <h1>
            Prime Steak
          </h1>
        </div>
        <div className="contact-info">
          <div>Book a Table Directly</div>
          <h2>(718) - 219 - 8652</h2>
          <div className="hours">
            Opening Hours
            <strong>Mon - Fri:</strong> 9am - 9pm
            <strong>Weekend:</strong> 9am - 11pm
          </div>
        </div>
      </section>
    );
  }
}
