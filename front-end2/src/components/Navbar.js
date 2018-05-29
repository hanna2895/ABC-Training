import React, { Component } from 'react';
import logo from '../generic-logo.jpg';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actionCreators from './actionCreators';
import LoginForm from './LoginForm';
import * as userActions from '../actions/userActions';
// this one will need redux to see if the user is logged in or nah
// will have login form, rendered only if the user is not logged in

class Navbar extends Component {
  componentDidMount() {
    // const { store } = this.context;
    // this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  // adding component didmount so that this component has access to the global store
  //

  // shit from dan abramov video: do I need this? idk
  // componentDidMount() {
  //   const { store } = this.context;
  //   this.unsubscribe = store.subscribe(() => this.forceUpdate());
  // }

  render() {
    // const { store } = this.context;
    // const state = store.getState();
    // console.log(state, 'this is state from navbar render')
    return (
      <div className="navbar">
        <div className="logo-div">
          <img className="logo" src={logo}/>
        </div>

        <div className="nav-container">
          <LoginForm logIn={this.props.log_in}/>
          <div className="button-holder">
              <button className="button button-primary">Home</button>
              <button className="button button-primary">Core Services</button>
              <button className="button button-primary">Our Team</button>
              <button className="button button-primary">News</button>
              <button className="button button-primary">Contact Us</button>
          </div>
        </div>
      </div>

    )
  }
}

// more shit from dan abramov vid
// Navbar.contextTypes = {
//   // store: React.PropTypes.object
// }

const mapStateToProps = function(state){
  return{
    logged_in: state.logged_in
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    log_in: (email, password) => dispatch(userActions.logIn(email, password))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
