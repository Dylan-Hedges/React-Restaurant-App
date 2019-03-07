import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';

export default class TopImg extends Component {
  //Needed to recieve props, initalize the state and bind event handler methods to the component
  constructor(props){
    //Calls parent constructor - super(props) passes props to the parent constructor
    super(props);
    // Sets the inital component state - Don't call setState() here, Don't make a copy of the props as it causes bugs e.g this.state = {data:props.data};
    // this.state = {data:props.data};
  }
  render() {
    return (
      <section id="TopImg">
        <div className="container">
          <Header />
          <div className="title">
            <h5>
              Welcome
            </h5>
            <h1>
              {this.props.data.topimg.title}
            </h1>
          </div>
          <div className="contact-info">
            <div className="booking">Book a Table Directly</div>
            <h2>(718) - 219 - 8652</h2>
            <div className="hours">
              Opening Hours
              <strong> Mon - Fri: </strong> 9am - 9pm
              <strong> Weekend: </strong> 9am - 11pm
            </div>
          </div>
        </div>
      </section>
    );
  }
}
