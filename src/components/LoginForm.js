import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as userActions from '../actions/userActions';


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleInput = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    this.props.log_in(this.state.email, this.state.password)
  }

  checkForMessage = () => {
    if (this.props.logged_in.message !== "") {
      return (
        <p className="message"> {this.props.logged_in.message} </p>
      )
    }
  }

  render() {
    const message = this.checkForMessage()
    console.log(this.props, 'this is props in login form')
    return (
      <div className="loginForm">
        <TextField className="loginField" hintText="Email" type="text" name="email" onChange={this.handleInput}/>
        <TextField className="loginField" hintText="Password" type="password" name="password" onChange={this.handleInput}/>
        <RaisedButton className="button login-button" primary={true} onClick={this.handleSubmit}>Log In </RaisedButton>
         <br />
        {message}
      </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
