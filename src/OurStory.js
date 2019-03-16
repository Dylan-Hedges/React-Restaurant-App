import React, { Component } from 'react';
import './App.scss';

export default class OurStory extends Component {
  render() {
    return (
      <section id="OurStory">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h5 className="comp-title">Our Story</h5>
              <h2>Slow smoked ribs, chicken and brisket made in house.</h2>
              <p>Bacon ipsum dolor amet cow frankfurter kevin brisket, beef ham hock
              tongue venison. Brisket sausage t-bone pork, swine andouille shoulder
              frankfurter doner chicken venison ribeye fatback salami pastrami.
              Alcatra porchetta burgdoggen pork turkey. T-bone salami ham hock pastrami
              ball tip, jowl drumstick filet mignon shoulder. Andouille pig meatloaf.,
              prosciutto landjaeger spare ribs shankle. Brisket capicola corned beef leberkas.
              Beef ribs frankfurter salami cupim, pork pork loin hamburger t-bone chuck kevin ribeye pig.</p>
              <div className="quote"><em>"The best ribs in the city!"</em> - <strong>Thomas Backstone</strong></div>
              <a href="#" className="reserve-btn">Reserve</a>
            </div>
            <div className="col-sm-6">
              <div className="video-image">
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
