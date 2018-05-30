import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div>
        <form>
          <label> Email: </label>
          <input type="text" name="email" placeholder="email" onChange={this.handleInput}/>
          <label> Password: </label>
          <input type="password" name="password" placeholder="password" onChange={this.handleInput}/>
          <button onClick={this.handleSubmit}>Log In </button>
        </form> <br />
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

export default connect(mapStateToProps)(LoginForm);
