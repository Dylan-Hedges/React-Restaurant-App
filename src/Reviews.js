import React, { Component } from 'react';
import './App.scss';
import image9 from './img/9.jpg';

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
          <i className={`fas fa-arrow-left ${(this.props.data.reviewnumber.currentreview > 0) ? 'ready': '' } `}></i>
          <i className={`fas fa-arrow-right ${(this.props.data.reviewnumber.currentreview === this.props.data.reviews.length -1) ? '' : `ready` }`}></i>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="Reviews">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <div className="side-img">
                <img src={image9} alt="reviewsimage"/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              {this.currentReview()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
