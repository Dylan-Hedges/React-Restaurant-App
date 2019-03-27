import React, { Component } from 'react';
import './App.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer id="Footer">
        <div className="container">
          <nav className="menu">
            <a href="#">Our Story</a>
            <a href="#">Reviews</a>
            <a href="#">Special Menu</a>
            <a href="#">Reservations</a>
            <a href="#">Contact Us </a>
          </nav>
          <ul className="social-media">
            <li><a href="http://www.facebook.com" target="new"><i className="fab fa-facebook-square"></i></a></li>
            <li><a href="http://www.twitter.com" target="new"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://plus.google.com/discover" target="new"><i className="fab fa-google-plus"></i></a></li>
            <li><a href="http://www.youtube.com" target="new"><i className="fab fa-youtube"></i></a></li>
          </ul>
          <div className="footerlink">
            Designed and Developed by Dylan Hedges (visit <a href="http://dylanhedges.com" target="_blank">dylanhedges.com</a>)
          </div>
        </div>
      </footer>
    );
  }
}
