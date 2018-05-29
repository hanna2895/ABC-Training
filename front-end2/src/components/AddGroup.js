import React, { Component } from 'react';

class AddGroup extends Component {
  constructor() {
    super();
    this.state = {
      group: "",
      selectedStudents: []
    }
  }

  handleChange = (e) => {
    const student = e.currentTarget.value;
    console.log(e.currentTarget)
    console.log(student, 'this is the clicked student')

    this.setState({
      selectedStudents: [...this.state.selectedStudents, student]
    })

    console.log(this.state.selectedStudents)
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
    console.log(this.state)
    this.props.addGroup(this.state.group)
  }

  render() {
    const unassignedStudents = this.props.unassignedStudents.map((student, i) => {
      return (
        <option key={student.id} value={student.name} onClick={this.handleChange}>{student.name}</option>
      )
    })

    return (
      <div className="list-container">
        <h2> Add A New Group </h2>
        <form>
          <label> Client Name: </label> <br />
          <input readOnly type="text" name="client" value={this.props.selectedClient} placeholder={this.props.selectedClient}/><br />
          <label> Group Name: </label> <br />
          <input type="text" name="group" value={this.state.group} onChange={this.handleInput}/> <br />
          <label> Add Students: </label> <br />
          <select multiple="true" name="students" value={this.state.selectedStudents} readOnly>
            {unassignedStudents}
          </select> < br />
          <button onClick={this.handleSubmit}>Add Group </button>
        </form>
      </div>
    )
  }
}

export default AddGroup;
