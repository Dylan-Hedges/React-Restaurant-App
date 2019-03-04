import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';

export default class Reviews extends Component {
  render() {
    return (
      <section id="Reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="side-img">
                <img src="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg" />
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="comp-title">REVIEWS</h5>
              <h2>The Food Network</h2>
              <h4>"Best Restaurant in the L.A area!"</h4>
              <p>Pariatur transferrem hic arbitror, o summis commodo pariatur, doctrina te quis
              singulis, aut expetendis ea mentitum. Minim ullamco philosophari, eu summis nam
              tempor. De aut labore eiusmod.</p>
              <div className="author"><strong>Sarah Bastiachi</strong> - <em>winner of the chef masters</em></div>
              <div className="arrows">
                <i class="fas fa-arrow-left"></i>
                <i class="fas fa-arrow-right ready"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
