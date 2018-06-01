import React, { Component } from 'react';
import StudentInfo from './StudentInfo';
import EditStudent from './EditStudent';
import DeleteModal from './DeleteModal';

class StudentShow extends Component {
  constructor() {
    super();
    this.state = {
      studentId: "",
      student: "",
      group: "unassigned",
      editingStudent: false,
      showDeleteModal: false
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

  toggleEditStudent = () => {
    this.setState({
      editingStudent: !this.state.editingStudent
    })
  }

  editStudent = async (studentName, email, password) => {
    console.log('edit student is called')
    const student = await fetch('http://localhost:3000/students/' + this.state.studentId, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify({
        name: studentName,
        email: email,
        password: password
      })
    })
    console.log(student, 'this is student')
    const studentParsed = await student.json()
    console.log(studentParsed, 'this is student parsed')
    this.toggleEditStudent();
    this.props.toggleViewStudent();
    this.props.updateStudentList();
  }

  toggleDeleteModal = () => {
    console.log('toggleDeleteModal is being called')
    if (this.state.viewGroup || this.state.selectedClientId !== "") {
      this.setState({
        showDeleteModal: !this.state.showDeleteModal
      })
    }
  }

  deleteStudent = async (studentId) => {
    console.log('delete student is being called')
    if (studentId !== "") {
      await fetch('http://localhost:3000/students/' + studentId, {
        method: "DELETE",
        credentials: 'include'
      })
    } else {
      // says you must select a student to delete or grays out the button
    }
    this.toggleDeleteModal();
    this.props.toggleViewStudent();
    this.props.updateStudentList();

  }

  render () {
    console.log(this.state, 'this is state from the render function in student show')
    return (
      <div>
        {this.state.editingStudent ? <div><EditStudent studentName={this.state.student.name} email={this.state.student.email} editStudent={this.editStudent} toggleEditStudent={this.toggleEditStudent}/> </div>
          : <div>{this.state.showDeleteModal ? <DeleteModal deleteStudent={this.deleteStudent} studentId={this.state.studentId} toggleDeleteModal={this.toggleDeleteModal} showDeleteModal={this.state.showDeleteModal}/>
            : <StudentInfo studentName={this.state.student.name} email={this.state.student.email} group={this.state.group} toggleEditStudent={this.toggleEditStudent} toggleDeleteModal={this.toggleDeleteModal} toggleViewStudent={this.props.toggleViewStudent} />
          } </div>


        }
      </div>
    )
  }
}


export default StudentShow;
