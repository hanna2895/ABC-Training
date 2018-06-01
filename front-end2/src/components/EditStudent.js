import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardHeader} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class EditStudent extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      email: "",
      password: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      studentName: this.props.studentName,
      email: this.props.email
    })
  }

  handleInput = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editStudent(this.state.studentName, this.state.email, this.state.password)
  }

  render () {
    return (
      <Card>
        <AppBar title="Edit this Student" showMenuIconButton={false} iconElementRight={<FlatButton label="Back" onClick={this.props.toggleEditStudent} />}/>

        <TextField className="add-margin" type="text" name="studentName" value={this.state.studentName} onChange={this.handleInput}/> <br />

        <TextField className="add-margin" type="text" name="email" value={this.state.email} onChange={this.handleInput}/> <br />

        <TextField hintText="New Password" className="add-margin" type="password" name="password" onChange={this.handleInput}/> <br />
        <RaisedButton className="button add-margin" primary={true} onClick={this.handleSubmit}> Edit Student </RaisedButton>
      </Card>
    )
  }

}

export default EditStudent;
