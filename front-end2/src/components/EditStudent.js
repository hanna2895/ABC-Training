import React, { Component } from 'react';

class EditStudent extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      email: "",
      password: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      studentName: this.props.studentName,
      email: this.props.email
    })
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
    this.props.editStudent(this.state.studentName, this.state.email, this.state.password)
  }

  render () {
    return (
      <form>
        <h2> Edit this Student </h2>
        <label> Name: </label>
        <input type="text" name="studentName" value={this.state.studentName} onChange={this.handleInput}/> <br />
        <label> Email: </label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleInput}/> <br />
        <label> Password: </label>
        <input type="password" name="password" onChange={this.handleInput}/> <br />
        <button onClick={this.handleSubmit}> Edit Student </button>
      </form>
    )
  }

}

export default EditStudent;
