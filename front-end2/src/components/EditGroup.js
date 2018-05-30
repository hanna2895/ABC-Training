import React, { Component } from 'react';

class EditGroup extends Component {
  constructor() {
    super();
    this.state = {
      group: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      group: this.props.groupName
    })
  }

  handleInput = (e) => {
    this.setState({
      group: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('edit group button being clicked')
    this.props.editGroup(this.state.group)
  }

  render() {
    return(
      <form>
        <h2> Edit this Group </h2>
        <label> Group Name: </label>
        <input type="text" name="name" value={this.state.group} onChange={this.handleInput}/>
        <button onClick={this.handleSubmit}> Edit Group </button>
      </form>
    )
  }
}

export default EditGroup;
