import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';

export default class Reviews extends Component {

  currentReview() {
    return(
      <div>
        <h5 className="comp-title">REVIEWS</h5>
        <h2>{this.props.data.reviews[this.props.data.reviewnumber.currentreview].company}</h2>
        <h4>{this.props.data.reviews[this.props.data.reviewnumber.currentreview].highlight}</h4>
        <p>{this.props.data.reviews[this.props.data.reviewnumber.currentreview].review}</p>
        <div className="author"><strong>{this.props.data.reviews[this.props.data.reviewnumber.currentreview].author}</strong> - <em>{this.props.data.reviews[this.props.data.reviewnumber.currentreview].authorInfo}</em></div>
        <div className="arrows">
          <i class="fas fa-arrow-left"></i>
          <i class="fas fa-arrow-right ready"></i>
        </div>
      </div>
    );
  }

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
              {this.currentReview()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
