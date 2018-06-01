import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardHeader} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class EditGroup extends Component {
  constructor() {
    super();
    this.state = {
      group: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      group: this.props.groupName
    })
  }

  handleInput = (e) => {
    this.setState({
      group: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('edit group button being clicked')
    this.props.editGroup(this.state.group)
  }

  render() {
    return(
      <Card className="addStudentForm text-center">
        <AppBar title="Edit this Group" showMenuIconButton={false} iconElementRight={<FlatButton label="Back" onClick={this.props.toggleEditGroup} />}/>

        <TextField className="add-margin" type="text" name="name" value={this.state.group} onChange={this.handleInput}/>
        <RaisedButton className="button add-margin" primary={true} onClick={this.handleSubmit}> Edit Group </RaisedButton>
      </Card>
    )
  }
}

export default EditGroup;
