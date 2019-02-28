import React, { Component } from 'react';
import './App.scss';

export default class SpecialMenu extends Component {
  render() {
    return (
      <section id="SpecialMenu" class="texturebg">
        <div className="container">
          <h5 className="comp-title">Special Menu</h5>
          <h2>Delicious Flavour of Autumn</h2>
          <div className="row boxes">
            <div className="col-md-4">
              <div className="box">
                <div className="box-img">
                  <div className="price-circle">$25</div>
                </div>
                <div className="title">Super BBQ Grill No Smoke</div>
                <p className="details">Fried eggs, Steak, Baked potato or French Fries, side of vegetables</p>
              </div>
            </div>
            <div className="col-md-4">
            <div className="box">
              <div className="box-img">
                <div className="price-circle">$25</div>
              </div>
              <div className="title">Super BBQ Grill No Smoke</div>
              <p className="details">Fried eggs, Steak, Baked potato or French Fries, side of vegetables</p>
            </div>
            </div>
            <div className="col-md-4">
            <div className="box">
              <div className="box-img">
                <div className="price-circle">$25</div>
              </div>
              <div className="title">Super BBQ Grill No Smoke</div>
              <p className="details">Fried eggs, Steak, Baked potato or French Fries, side of vegetables</p>
            </div>
            </div>
          </div>
          <a href="#" className="link">View Full Menu</a>
        </div>
      </section>
    );
  }
}
