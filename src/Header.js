import React, { Component } from 'react';
import './App.scss';
import logo from './img/logo_white.png';
import {Link} from 'react-scroll';

class Header extends Component {
  render() {
    return (
      <header id="Header">
        <div className="logo">
          <a href="#"><img src={logo}/></a>
        </div>
        <nav>
          <Link className="headerMenu" activeClass="active" to="OurStory" spy={true} smooth={true} offset={0} duration= {1000}>
            Our Story
          </Link>
          <Link className="headerMenu" activeClass="active" to="SpecialMenu" spy={true} smooth={true} offset={0} duration= {1500}>
            Special Menu
          </Link>
          <Link className="headerMenu" activeClass="active" to="Reviews" spy={true} smooth={true} offset={0} duration= {1250}>
            Reviews
          </Link>
          <Link className="headerMenu" activeClass="active" to="ContactUs" spy={true} smooth={true} offset={0} duration= {1750}>
            Reservations
          </Link>
          <Link className="headerMenu" activeClass="active" to="ContactUs" spy={true} smooth={true} offset={0} duration= {2000}>
            Contact Us
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
