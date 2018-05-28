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
    console.log(student, 'this is the clicked student')
    if (this.state.selectedStudents.length === 0) {
      console.log('setting state when length is 0')
      this.setState({
        selectedStudents: [e.currentTarget.value]
      })
      console.log(this.state.selectedStudents, 'in length=0')
    } else {
      this.setState({
        selectedStudents: [...this.state.selectedStudents, student]
      })
    }

    console.log(this.state.selectedStudents)
  }

  render() {
    const unassignedStudents = this.props.unassignedStudents.map((student, i) => {
      return (
        <option key={student.id} value={student.name}>{student.name}</option>
      )
    })

    return (
      <div className="list-container">
        <h2> Add A New Group </h2>
        <form>
          <label> Client Name: </label> <br />
          <input readOnly type="text" name="client" value={this.props.selectedClient} placeholder={this.props.selectedClient}/><br />
          <label> Group Name: </label> <br />
          <input type="text" name="group" value={this.state.group} /> <br />
          <label> Add Students: </label> <br />
          <select multiple="true" value={this.state.selectedStudents} onChange={this.handleChange}>
            {unassignedStudents}
          </select> < br />
          <button>Add Group </button>
        </form>
      </div>
    )
  }
}

export default AddGroup;
