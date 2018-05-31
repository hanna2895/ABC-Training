import React, { Component } from 'react';

// when the user clicks on each student, it takes them to the show / edit page. they can choose to 'go back' or 'save and close', which will update the user's info
class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      // selectedStudent: "",
      selectedStudentId: ""
    }
  }

  handleSelect = (e) => {
    console.log(e.target.id, 'was clicked')

    this.setState({
      selectedStudentId: e.target.id
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.state.selectedStudentId !== "") {
      this.props.toggleViewStudent(this.state.selectedStudentId)
    } else {
      // toggle something that says you must select a student to view
    }
  }

  render() {
    const ListOfStudents = this.props.students.map((student, i) => {
      return(
        <li key={student.id} id={student.id} onClick={this.handleSelect}> Name: {student.name} Email: {student.email} </li>
      )
    })
    return (
      <div className="list-container">
        <h2>All Students </h2>
        <div className="list-holder">
          <ul>
            {ListOfStudents}
          </ul>
        </div>
        <button onClick={this.handleClick}> View this Student's Details </button>
        <button onClick={this.props.toggleAddStudent}> Add a New Student </button>
      </div>
    )
  }

}

export default StudentList;
