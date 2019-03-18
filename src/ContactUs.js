import React, { Component } from 'react';
import './App.scss';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="ContactUs" className="texturebg">
        <div className="container">
          <h5 className="comp-title">Contact Us</h5>
          <h2>Joe's BBQ and Smokehouse</h2>
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <h6>Phone:</h6>
                <div className="title">342-346-6789</div>
                <h6>Email:</h6>
                <div className="title"><a href="mailto:info@primesteak.com">info@primesteak.com</a></div>
                <h6>Location:</h6>
                <h6 className="Address">
                  {this.props.data.contactus.road}
                  <br/>
                  {this.props.data.contactus.town}
                  <br/>
                  {this.props.data.contactus.code}
                </h6>
              </div>
              <div className="col-md-6">
                <h6 className="title">
                  Lunch Service
                </h6>
                <p>
                  Friday, Saturday and Sunday:<br/>
                  From 12pm - 1:30pm
                </p>
                <h6 className="title">
                  Dinner Service
                </h6>
                <p>
                  Daily:<br/>
                  From 6pm - 11:30pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
