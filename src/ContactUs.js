import React, { Component } from 'react';
import './App.scss';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="ContactUs" class="texturebg">
        <div className="container">
          <h5 className="comp-title">Contact US</h5>
          <h2>Delicious Flavour of Autumn</h2>
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <div className="city">
                  Los Angeles, California
                </div>
                <h6 className="Address">
                </h6>
                <p><strong>email:</strong><a href="mailto:info@primesteak.com">info@primesteak.com</a></p>
              </div>
              <div className="col-md-6">
                Two
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
