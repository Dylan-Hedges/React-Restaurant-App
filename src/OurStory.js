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
              <h2>Cooking is the art of adjustment</h2>
              <p>Commodo esse veniam quo irure te ea te cohaerescant ad quorum cupidatat qui
              pariatur et a sint fore aut mentitum. In singulis domesticarum hic velit se
              iudicem, excepteur ita mandaremus, deserunt eruditionem e mentitum. An deserunt
              aut laborum do quis ad voluptate. Litteris hic sint deserunt in sint nostrud e
              probant, ea ab summis sunt sunt, laboris duis ubi constias voluptatibus.</p>
              <div className="quote">The best steak in the town of Huntington - <strong>Thomas Eggsy</strong></div>
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
