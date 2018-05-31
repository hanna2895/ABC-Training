import React, { Component } from 'react';

class AddAdmin extends Component {
  constructor() {
    super();
    this.state = {
      adminName: "",
      email: "",
      password: "",
      isLeadAdmin: ""
    }
  }

  handleInput = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addAdmin(this.state.adminName, this.state.email, this.state.password, this.state.isLeadAdmin)
  }

  render() {
    return (
      <form>
        <h2> Add New Admin </h2>
        <label> Name: </label>
        <input type="text" name="adminName" onChange={this.handleInput}/> <br />
        <label> Email: </label>
        <input type="text" name="email" onChange={this.handleInput}/> <br />
        <label> Password: </label>
        <input type="password" name="password" onChange={this.handleInput}/> <br />
        <label> Is Lead Admin: </label>
        <input type="checkbox" name="isLeadAdmin" onChange={this.handleInput}/> <br />
        <button onClick={this.handleSubmit}> Create Admin </button>
      </form>
    )
  }
}

export default AddAdmin;
