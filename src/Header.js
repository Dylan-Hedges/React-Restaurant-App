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
          <a className="navbarItemsStyle" href="#">Menu</a>
          <a className="navbarItemsStyle" href="#">Platters</a>
          <a className="navbarItemsStyle" href="#">Locations</a>
          <a className="navbarItemsStyle" href="#">Rewards</a>
          <a className="navbarItemsStyle" href="#">Reservations</a>
        </nav>
      </header>
    );
  }
}

export default Header;
