import React, { Component } from 'react';

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    this.props.logIn()
  }


  render() {
    return (
      <div>
        <form>
          <label> Email: </label>
          <input type="text" name="email" placeholder="email" />
          <label> Password: </label>
          <input type="password" name="password" placeholder="password" />
          <button onClick={this.handleSubmit}>Log In </button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
