import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
      <MuiThemeProvider>
      <Card className="newAdminForm">
        <CardHeader> Add New Admin </CardHeader>
        <TextField hintText="Name" type="text" name="adminName" onChange={this.handleInput}/> <br />
        <TextField hintText="Email address" type="text" name="email" onChange={this.handleInput}/> <br />
        <TextField hintText="Password" type="password" name="password" onChange={this.handleInput}/> <br />
        <Checkbox label="Is Lead Admin: " labelPosition="left" type="checkbox" name="isLeadAdmin" onCheck={this.handleInput}/> <br />
        <RaisedButton className="button" primary={true} style={buttonStyle} onClick={this.handleSubmit}> Create Admin </RaisedButton>
      </Card>
      </MuiThemeProvider>
    )
  }
}

const buttonStyle = {
  width: 150,
  margin: 15,
};

export default AddAdmin;
