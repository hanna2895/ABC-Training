import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';



class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    }
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
    this.props.addStudent(this.state.name, this.state.email, this.state.password)
  }

  render() {
    return (
      <Card className="addStudentForm">
        <AppBar title="Add a New Student" showMenuIconButton={false} iconElementRight={<FlatButton label="Back" onClick={this.props.toggleAddStudent} />}/>

          <TextField className="add-margin" hintText="Name" type="text" name="name" value={this.state.name} onChange={this.handleInput} /> <br />
          <TextField className="add-margin" hintText="Email address" type="text" name="email" value={this.state.email} onChange={this.handleInput} /> <br />
          <TextField className="add-margin" hintText="Password" type="password" name="password" value={this.state.password} onChange={this.handleInput} /> <br />
          <RaisedButton className="button add-margin" primary={true} onClick={this.handleSubmit}> Add Student </RaisedButton>

      </Card>
    )
  }
}

export default AddStudent;
