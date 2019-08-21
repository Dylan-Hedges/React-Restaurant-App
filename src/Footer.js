import React, { Component } from 'react';
import './App.scss';
import {Link} from 'react-scroll';

export default class Footer extends Component {
  render() {
    return (
      <footer id="Footer">
        <div className="container">
          <nav className="menu">
            <Link className="footerMenu" activeClass="active" to="OurStory" spy={true} smooth={true} offset={0} duration= {1000}>
              Our Story
            </Link>
            <Link className="footerMenu" activeClass="active" to="SpecialMenu" spy={true} smooth={true} offset={0} duration= {1500}>
              Special Menu
            </Link>            
            <Link className="footerMenu" activeClass="active" to="Reviews" spy={true} smooth={true} offset={0} duration= {1250}>
              Reviews
            </Link>
            <Link className="footerMenu" activeClass="active" to="ContactUs" spy={true} smooth={true} offset={0} duration= {1750}>
              Reservations
            </Link>
            <Link className="footerMenu" activeClass="active" to="ContactUs" spy={true} smooth={true} offset={0} duration= {2000}>
              Contact Us
            </Link>
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
