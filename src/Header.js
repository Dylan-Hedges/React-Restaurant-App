import React, { Component } from 'react';
import './App.scss';
import logo from './img/logo_white.png';

class Header extends Component {
  render() {
    return (
      <header id="Header">
        <div className="logo">
          <a href="#"><img src={logo}/></a>
        </div>
        <nav>
          <a href="#">Our Story</a>
          <a href="#">Reviews</a>
          <a href="#">Special Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>
    );
  }
}

export default Header;
