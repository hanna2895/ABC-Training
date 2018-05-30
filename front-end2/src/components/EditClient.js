import React, { Component } from 'react';

class EditClient extends Component {
  constructor() {
    super();
    this.state = {
      client: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      client: this.props.selectedClient
    })
  }

  handleInput = (e) => {
    this.setState({
      client: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('edit client button clicked')
    this.props.editClient(this.state.client);
  }


  render() {
    return (
      <form>
        <h2> Edit Client </h2>
        <label> Client Name: </label> <br />
        <input type="text" name="name" value={this.state.client} onChange={this.handleInput} />
        <button onClick={this.handleSubmit}> Edit Client </button>
      </form>
    )
  }
}

export default EditClient;
