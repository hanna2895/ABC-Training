import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardHeader} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class EditClient extends Component {
  constructor() {
    super();
    this.state = {
      client: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      client: this.props.selectedClient
    })
  }

  handleInput = (e) => {
    this.setState({
      client: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('edit client button clicked')
    this.props.editClient(this.state.client);
  }


  render() {
    return (
      <Card className="addStudentForm text-center">
        <AppBar title="Edit Client" showMenuIconButton={false} iconElementRight={<FlatButton label="Back" onClick={this.props.toggleEditClient} />}/>

        <TextField className="add-margin" type="text" name="name" value={this.state.client} onChange={this.handleInput} /> <br />
        <RaisedButton className="button add-margin" primary={true} onClick={this.handleSubmit}> Edit Client </RaisedButton>
      </Card>
    )
  }
}

export default EditClient;
