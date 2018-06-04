import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';


// when the user clicks on each student, it takes them to the show / edit page. they can choose to 'go back' or 'save and close', which will update the user's info
class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      // selectedStudent: "",
      selectedStudentId: ""
    }
  }

  handleSelect = (selectedRows, index, value) => {
    this.setState({
      selected: selectedRows,
      selectedStudentId: value.currentTarget.id
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
      let id = student.id
      return(
        <TableRow key={i} id={student.id} selected={this.state.selectedStudentId == id ? true : false} >
          <TableRowColumn id={student.id}>{student.name}</TableRowColumn>
          <TableRowColumn id={student.id}>{student.email}</TableRowColumn>
        </TableRow>
      )
    })

    return (
      <Card className="list-container">
        <AppBar title="All Students" showMenuIconButton={false} iconElementRight={<FlatButton label="Add New Student" onClick={this.props.toggleAddStudent} />} />
        <Table onCellClick={this.handleSelect}>
          <TableBody displayRowCheckbox={false}>
            {ListOfStudents}
          </TableBody>
        </Table>
        <RaisedButton className="button wide-button" primary={true} onClick={this.handleClick}> View this Student's Details </RaisedButton>

      </Card>
    )
  }

}

export default StudentList;
