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
          </ul>
          <div class="copyright">
            © Copyright
          </div>
        </div>
      </footer>
    );
  }
}
