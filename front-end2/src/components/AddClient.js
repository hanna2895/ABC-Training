import React, { Component } from 'react';

class AddClient extends Component {
  constructor() {
    super();
    this.state = {
      client: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      client: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit button clicked')
    this.props.addClient(this.state.client)
  }


  render() {
    return (
      <div className="list-container">
        <h2> Add a New Client </h2>
        <form>
          <label> Client Name: </label>
          <input type="text" name="client" value={this.state.client} onChange={this.handleInput} />
          <button onClick={this.handleSubmit}> Add Client </button>
        </form>
      </div>
    )
  }
}

export default AddClient;
