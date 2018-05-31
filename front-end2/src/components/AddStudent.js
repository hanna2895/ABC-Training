import React, { Component } from 'react';

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleInput = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state.name, this.state.email, this.state.password)
  }

  render() {
    return (
      <div className="list-container">
        <h2> Add a New Student </h2>
        <form>
          <label> Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInput} /> <br />
          <label> Email: </label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleInput} /> <br />
          <label> Password: </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleInput} /> <br />
          <button onClick={this.handleSubmit}> Add Student </button>
        </form>
      </div>
    )
  }
}

export default AddStudent;
