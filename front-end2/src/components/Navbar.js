import React, { Component } from 'react';
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
          <h1>| ABC Training |</h1>
        </div>

        <div className="nav-container">

          <div className="button-holder">
              <FlatButton className="button button-primary">HOME</FlatButton>
              <FlatButton className="button button-primary" style={long}>CORE SERVICES</FlatButton>
              <FlatButton className="button button-primary">OUR TEAM</FlatButton>
              <FlatButton className="button button-primary">NEWS</FlatButton>
              <FlatButton className="button button-primary">CONTACT US</FlatButton>
              <FlatButton onClick={this.props.toggleLoginForm} className="button button-primary">LOG IN</FlatButton>
          </div>
          {this.props.logged_in.logged_in ? <div className="loginForm">
              <p> You are logged in as {this.props.logged_in.user_name} </p>
              <RaisedButton primary={true} label="Log Out" onClick={this.handleClick}></RaisedButton>
            </div>
            : null }
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
