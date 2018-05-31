import React, { Component } from 'react';

class EditAdmin extends Component {
  constructor() {
    super();
    this.state = {
      adminName: "",
      email: "",
      password: "",
      isLeadAdmin: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      adminName: this.props.adminName,
      email: this.props.email,
      isLeadAdmin: this.props.isLeadAdmin
    })
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
    this.props.editAdmin(this.state.adminName, this.state.email, this.state.password)
  }

  render() {
    return (
      <form>
        <h2> Edit Admin Information </h2>
        <label> Name: </label>
        <input type="text" name="adminName" value={this.state.adminName} onChange={this.handleInput}/> <br />
        <label> Email: </label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleInput}/> <br />
        <label> Password: </label>
        <input type="password" name="password" onChange={this.handleInput}/> <br />
        <label> Lead Admin: </label>
        <input type="checkbox" name="isLeadAdmin" checked={this.state.isLeadAdmin} readOnly={this.props.isLeadAdmin} onChange={this.handleInput}/><br />
        <button onClick={this.handleSubmit}> Edit Information </button>
      </form>
    )
  }
}

export default EditAdmin;
