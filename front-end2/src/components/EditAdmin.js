import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardHeader} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class EditAdmin extends Component {
  constructor() {
    super();
    this.state = {
      adminName: "",
      email: "",
      password: "",
      isLeadAdmin: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      adminName: this.props.adminName,
      email: this.props.email,
      isLeadAdmin: this.props.isLeadAdmin
    })
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
    this.props.editAdmin(this.state.adminName, this.state.email, this.state.password)
  }

  render() {
    return (
      <Card>
        <AppBar title="Edit Admin Information" showMenuIconButton={false} iconElementRight={<FlatButton label="Back" onClick={this.props.toggleEditAdmin} />}/>

        <TextField className="add-margin" type="text" name="adminName" value={this.state.adminName} onChange={this.handleInput}/> <br />
        <TextField className="add-margin" type="text" name="email" value={this.state.email} onChange={this.handleInput}/> <br />
        <TextField hintText="New Password" className="add-margin" type="password" name="password" onChange={this.handleInput}/> <br />
        <Checkbox className="add-margin" label="Is Lead Admin: " labelPosition="left" checked={this.state.isLeadAdmin} type="checkbox" readOnly={this.props.isLeadAdmin} name="isLeadAdmin" onCheck={this.handleInput}/> <br />
        <RaisedButton className="add-margin button" primary={true} onClick={this.handleSubmit}> Edit Information </RaisedButton>
      </Card>
    )
  }
}

export default EditAdmin;
