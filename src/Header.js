import React, { Component } from 'react';
import './App.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          Logo
        </div>
        <nav>
          <a className="navbarItemsStyle" href="#">Our Story</a>
          <a className="navbarItemsStyle" href="#">Reviews</a>
          <a className="navbarItemsStyle" href="#">Special Menu</a>
          <a className="navbarItemsStyle" href="#">Reservations</a>
          <a className="navbarItemsStyle" href="#">Contact Us</a>
        </nav>
      </header>
    );
  }
}

export default Header;
