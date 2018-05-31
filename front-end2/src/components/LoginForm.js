import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
    this.props.logIn(this.state.email, this.state.password)
  }

  checkForMessage = () => {
    if (this.props.logged_in.message !== "") {
      return (
        <p> {this.props.logged_in.message} </p>
      )
    }
  }

  render() {
    const message = this.checkForMessage()
    return (
      <MuiThemeProvider>
        <div className="loginForm">
          <TextField className="loginField" hintText="Email" type="text" name="email" onChange={this.handleInput}/>
          <TextField className="loginField" hintText="Password" type="password" name="password" onChange={this.handleInput}/>
          <RaisedButton style={style} primary={true} onClick={this.handleSubmit}>Log In </RaisedButton>
         <br />
        {message}
        </div>
      </MuiThemeProvider>
    )
  }
}

const style = {
  width: 260,
}

const mapStateToProps = function(state){
  return{
    logged_in: state.logged_in
  }
}

export default connect(mapStateToProps)(LoginForm);
