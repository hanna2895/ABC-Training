import React, { Component } from 'react';
import logo from '../generic-logo.jpg'
// this one will need redux to see if the user is logged in or nah
// will have login form, rendered only if the user is not logged in

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-div">
          <img className="logo" src={logo}/>
        </div>

        <div className="container">
        // login form will go here
              <button className="button button-primary">Home</button>
              <button className="button button-primary">Core Services</button>
              <button className="button button-primary">Our Team</button>
              <button className="button button-primary">News</button>
              <button className="button button-primary">Contact Us</button>
        </div>
      </div>

    )
  }
}


export default Navbar;
