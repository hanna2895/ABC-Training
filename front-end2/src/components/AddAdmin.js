import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardHeader} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class AddAdmin extends Component {
  constructor() {
    super();
    this.state = {
      adminName: "",
      email: "",
      password: "",
      isLeadAdmin: ""
    }
  }

  handleInput = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addAdmin(this.state.adminName, this.state.email, this.state.password, this.state.isLeadAdmin)
  }

  render() {
    return (
      <Card className="addStudentForm  more-height">
        <AppBar title="Add New Admin" showMenuIconButton={false} iconElementRight={<FlatButton label="Back" onClick={this.props.toggleAddAdmin} />}/>
        <TextField className="add-margin" hintText="Name" type="text" name="adminName" onChange={this.handleInput}/> <br />
        <TextField className="add-margin" hintText="Email address" type="text" name="email" onChange={this.handleInput}/> <br />
        <TextField className="add-margin" hintText="Password" type="password" name="password" onChange={this.handleInput}/> <br />
        <Checkbox className="add-margin" label="Is Lead Admin: " labelPosition="left" type="checkbox" name="isLeadAdmin" onCheck={this.handleInput}/> <br />
        <RaisedButton className="button add-margin" primary={true} style={buttonStyle} onClick={this.handleSubmit}> Create Admin </RaisedButton>
      </Card>
    )
  }
}

const buttonStyle = {
  width: 150,
  margin: 15,
};

export default AddAdmin;
