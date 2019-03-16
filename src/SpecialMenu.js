import React, { Component } from 'react';
import './App.scss';

export default class SpecialMenu extends Component {
  //Loops through special menu items
  loopMenu () {
    return this.props.data.specialmenu.map(function(item){
      return(
        <div className="col-md-4">
          <div className="box">
            <div className="box-img"><img src={item.image}/><div className="price-circle">{item.price}</div></div>
            <div className="title">{item.title}</div>
            <p className="details">{item.description}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <section id="SpecialMenu" className="texturebg">
        <div className="container">
          <h5 className="comp-title">Special Menu</h5>
          <h2>The finest BBQ and smoked meats</h2>
          <div className="row boxes">
            {this.loopMenu()}
          </div>
            <div className="text-center ">
              <a href="#" className="reserve-btn">View Full Menu</a>
          </div>
        </div>
      </section>
    );
  }
}

//          <a href="#" className="link">View Full Menu</a>
