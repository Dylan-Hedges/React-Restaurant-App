import React, { Component } from 'react';
import './App.scss';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="ContactUs" className="texturebg">
        <div className="container">
          <h5 className="comp-title">Contact US</h5>
          <h2>Delicious Flavour of Autumn</h2>
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <div className="title">
                  {this.props.data.contactus.location}
                </div>
                <h6 className="Address">
                  535 main str<br/>
                  Hollywood, CA 12402
                </h6>
                <p><strong>email:</strong><a href="mailto:info@primesteak.com">info@primesteak.com</a></p>
              </div>
              <div className="col-md-6">
                <h6>
                  Phone:
                </h6>
                <div className="title">
                  342-346-6789
                </div>
                <h6>
                  Lunch Service
                </h6>
                <p>
                  Friday, Saturday and Sunday<br/>
                  from 12pm - 1:30pm
                </p>
                <h6>
                  Dinner Service
                </h6>
                <p>
                  Daily<br/>
                  from 6pm - 11:30pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
