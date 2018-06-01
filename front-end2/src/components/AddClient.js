import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardHeader} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class AddClient extends Component {
  constructor() {
    super();
    this.state = {
      client: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      client: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit button clicked')
    this.props.addClient(this.state.client)
  }


  render() {
    return (
      <Card className="addStudentForm text-center">
        <AppBar title="Add a New Client" showMenuIconButton={false} iconElementRight={<FlatButton label="Back" onClick={this.props.toggleAddClient} />}/>

          <TextField className="add-margin" hintText="Name" type="text" name="client" value={this.state.client} onChange={this.handleInput} /><br />
          <RaisedButton className="button add-margin" primary={true} onClick={this.handleSubmit}> Add Client </RaisedButton>

      </Card>
    )
  }
}

export default AddClient;
