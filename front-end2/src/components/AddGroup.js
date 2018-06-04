import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class AddGroup extends Component {
  constructor() {
    super();
    this.state = {
      group: "",
      selectedStudents: [],
      values: []
    }
  }
  handleChange = (event, index, values) => this.setState({values});

  handleChange = (e, value) => {
    console.log(value, 'this is value from handlechange')
    // const student = {
    //   name: e.currentTarget.value,
    //   id: e.currentTarget.id
    // }
    // console.log(e.currentTarget)
    // console.log(student, 'this is the clicked student')
    //
    // this.setState({
    //   selectedStudents: [...this.state.selectedStudents, student]
    // })
    //
    // console.log(this.state.selectedStudents)
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
    this.props.addGroup(this.state.group, this.state.selectedStudents)
    // this.props.updateStudentGroupId(this.state.selectedStudents)
  }

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return this.state.students[values[0]].name;
      default:
        return `${values.length} names selected`;
      }
    }

menuItems(students) {
  return students.map((student) => (
    <MenuItem
      key={student.id}
      insetChildren={true}
      checked={this.state.value.indexOf(student.id) > -1}
      value={student.id}
      primaryText={student.name}
    />
  ));
}

  render() {
    // const unassignedStudents = this.props.unassignedStudents.map((student, i) => {
    //   return (
    //     <MenuItem key={student.id} id={student.id} value={student.id} primaryText={student.name} onClick={this.handleChange}>{student.name}</MenuItem>
    //   )
    // })

    return (
      <Card className="list-container">
        <AppBar title="Add a New Group" showMenuIconButton={false} iconElementRight={<FlatButton label="Back" onClick={this.props.toggleAddGroup} />}/>

          <TextField floatingLabelText="Client Name" className="add-margin" readOnly type="text" name="client" value={this.props.selectedClient} placeholder={this.props.selectedClient}/><br />

          <TextField hintText="Group Name" className="add-margin" type="text" name="group" value={this.state.group} onChange={this.handleInput}/> <br />

          <SelectField selectionRenderer={this.selectionRenderer} className="add-margin" floatingLabelText="Add students to this group" name="students" value={this.state.unassignedStudents} readOnly>
            {this.menuItems(this.props.unassignedStudents)}
          </SelectField> < br />
          <RaisedButton className="button add-margin" primary={true} onClick={this.handleSubmit}>Add Group </RaisedButton>

      </Card>
    )
  }
}

export default AddGroup;
