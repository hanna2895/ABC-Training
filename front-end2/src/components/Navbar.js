import React, { Component } from 'react';
import logo from '../generic-logo.jpg';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import * as userActions from '../actions/userActions';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
// this one will need redux to see if the user is logged in or nah
// will have login form, rendered only if the user is not logged in

class Navbar extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.log_out();
  }

  render() {

    return (
      <div className="navbar">
        <div className="logo-div">
          <img className="logo" src={logo} alt="logo"/>
        </div>

        <div className="nav-container">

          <div className="button-holder">
              <FlatButton className="button button-primary">Home</FlatButton>
              <FlatButton className="button button-primary" style={long}>Core Services</FlatButton>
              <FlatButton className="button button-primary">Our Team</FlatButton>
              <FlatButton className="button button-primary">News</FlatButton>
              <FlatButton className="button button-primary">Contact Us</FlatButton>
          </div>
          {this.props.logged_in.logged_in ? <div className="loginForm">
              <p> You are logged in as {this.props.logged_in.user_name} </p>
              <RaisedButton primary={true} label="Log Out" onClick={this.handleClick}></RaisedButton>
            </div>
            : <LoginForm logIn={this.props.log_in}/> }
        </div>
      </div>

    )
  }
}



const long = {
  width: 130,
}

const mapStateToProps = function(state){
  return{
    logged_in: state.logged_in
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    log_in: (email, password) => dispatch(userActions.logIn(email, password)),
    log_out: () => dispatch(userActions.logOut())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
