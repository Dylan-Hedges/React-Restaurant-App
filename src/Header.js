import React, { Component } from 'react';
import './App.scss';
import logo from './img/logo_white.png';
import {Link} from 'react-scroll';

class Header extends Component {
  render() {
    return (
      <header id="Header">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navcollapseid">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcollapseid">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="headerMenu" activeClass="active" to="OurStory" spy={true} smooth={true} offset={0} duration= {1000}>Our Story</Link></li>
                <li className="nav-item"><Link className="headerMenu" activeClass="active" to="SpecialMenu" spy={true} smooth={true} offset={0} duration= {1500}>Special Menu</Link></li>
                <li className="nav-item"><Link className="headerMenu" activeClass="active" to="Reviews" spy={true} smooth={true} offset={0} duration= {1250}>Reviews</Link></li>
                <li className="nav-item"><Link className="headerMenu" activeClass="active" to="ContactUs" spy={true} smooth={true} offset={0} duration= {1750}>Reservations</Link></li>
                <li className="nav-item"><Link className="headerMenu" activeClass="active" to="ContactUs" spy={true} smooth={true} offset={0} duration= {2000}>Contact Us</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
