import React, { Component } from 'react';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import StudentShow from './StudentShow';

class StudentHolder extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      addingStudent: false,
      viewingStudent: false,
      selectedStudentId: ""
    }
  }

  componentDidMount() {
    this.updateStudentList()
  }

  updateStudentList = () => {
    this.getStudents()
      .then((students) => {
        this.setState({students: students})
      })
      .catch((err) => {
        console.log(err)
      });
  }

  getStudents = async () => {
    const studentsJson = await fetch('http://localhost:3000/students', {
      method: "GET",
      credentials: 'include'
    });
    const students = await studentsJson.json();
    const studentsArray = students.students
    return studentsArray
  }

  toggleAddStudent = () => {
    this.setState({
      addingStudent: !this.state.addingStudent
    })
  }

  addStudent = async (studentName, email, password) => {
    // want to also add a drop down for them to select from available clients and fron available groups
    await fetch('http://localhost:3000/students', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        name: studentName,
        email: email,
        password: password
      })
    })
    this.updateStudentList()
    this.toggleAddStudent()
  }

  toggleViewStudent = (studentId) => {
    if (studentId) {
      this.setState({
        viewingStudent: !this.state.viewingStudent,
        selectedStudentId: studentId
      })
    } else {
      this.setState({viewingStudent: !this.state.viewingStudent})
    }
  }

  render() {
    return(
      <div className="admin-holder">

          {this.state.addingStudent ? <AddStudent addStudent={this.addStudent} toggleAddStudent={this.toggleAddStudent}/>
          : <div> {this.state.viewingStudent ? <StudentShow selectedStudentId={this.state.selectedStudentId} toggleViewStudent={this.toggleViewStudent} updateStudentList={this.updateStudentList}/>
            : <StudentList students={this.state.students} toggleAddStudent={this.toggleAddStudent} toggleViewStudent={this.toggleViewStudent}/>
          } </div>
        }





      </div>
    )
  }

}

export default StudentHolder;
