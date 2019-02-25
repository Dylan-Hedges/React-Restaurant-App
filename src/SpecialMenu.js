import React, { Component } from 'react';
import './App.scss';

export default class SpecialMenu extends Component {
  render() {
    return (
      <section id="SpecialMenu">
        <div className="container">
          <h5 className="comp-title">Special Menu</h5>
          <h2>Delicious Flavour of Autumn</h2>
          <div className="row">
            <div className="col-md-4">
              Box
            </div>
            <div className="col-md-4">
              Box
            </div>
            <div className="col-md-4">
              Box
            </div>
          </div>
          <a href="#">View Full Menu</a>
        </div>
      </section>
    );
  }
}
