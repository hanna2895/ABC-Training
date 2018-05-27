import React, { Component } from 'react';
import StudentList from './StudentList'

class StudentHolder extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    this.getStudents()
      .then((students) => {
        this.setState({students: students})
        console.log(this.state, 'this is state in componentDidMount')
      })
      .catch((err) => {
        console.log(err)
      });
  }

  getStudents = async () => {
    const studentsJson = await fetch('http://localhost:3000/students', {
      method: "GET"
      // credentials: 'include'
    });
    const students = await studentsJson.json();
    console.log(students)
    const studentsArray = students.students
    console.log(studentsArray);
    return studentsArray
  }

  render() {
    // this.getStudents()
    return(
      <div>
        <div className="admin-holder">
          <StudentList students={this.state.students}/>
        </div>
        <div>
        </div>
      </div>
    )
  }

}

export default StudentHolder;
