import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          Logo
        </div>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Platters</a>
          <a href="#">Locations</a>
          <a href="#">Rewards</a>
          <a href="#">Reservations</a>
        </nav>
      </div>
    );
  }
}

export default Header;
