import React, { Component } from 'react';
import StudentInfo from './StudentInfo';

class StudentShow extends Component {
  constructor() {
    super();
    this.state = {
      studentId: "",
      student: "",
      group: "unassigned"
    }
  }

  componentWillMount = () => {
    this.setState({
      studentId: this.props.selectedStudentId
    })
    console.log(this.state,' this is state from studentshow')
  }

  componentDidMount = () => {
    console.log(this.state, 'this is state from componentDidMount')
    this.getStudentInfo();
  }

  getStudentInfo = async () => {
    const student = await fetch('http://localhost:3000/students/' + this.state.studentId, {
      method: "GET",
      credentials: 'include'
    })

    const studentParsed = await student.json();
    console.log(studentParsed)
    if (studentParsed.student.group_id) {
      this.getStudentsGroup(studentParsed.student.group_id)
    }

    this.setState({
      student: studentParsed.student
    })
  }

  getStudentsGroup = async (id) => {
    const group = await fetch('http://localhost:3000/groups/' + id, {
      method: "GET",
      credentials: 'include'
    })

    const groupParsed = await group.json()
    console.log(groupParsed, 'this is group parsed')
    this.setState({
      group: groupParsed.group.name
    })

  }

  render () {
    console.log(this.state, 'this is state from the render function in student show')
    return (
        <StudentInfo studentName={this.state.student.name} email={this.state.student.email} group={this.state.group} password={this.state.student.password}/>
      )
  }
}


export default StudentShow;
