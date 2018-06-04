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

class ClientList extends Component {
  constructor() {
    super();
    this.state = {
      selectedClientId: ""
    }
  }

  handleClick = (selectedRows, index, value) => {
    const id = value.currentTarget.id

    this.setState({
      selectedClientId: id
    })

    this.props.getGroups(id)
    // maybe make that shit change color when it's clicked
  }

  render() {
    const ListOfClients = this.props.clients.map((client, i) => {
      let id = client.id
      return (
        <TableRow key={i} id={client.id} selected={this.state.selectedClientId == id ? true : false} >
          <TableRowColumn id={client.id}> {client.name} </TableRowColumn>
        </TableRow>
      )
    })

    return (
      <Card className="list-container">
        <AppBar title="Clients" showMenuIconButton={false} iconElementRight={<FlatButton label="Add New Client" onClick={this.props.toggleAddClient} />} />
        <Table onCellClick={this.handleClick}>
          <TableBody displayRowCheckbox={false}>
            {ListOfClients}
          </TableBody>
        </Table>

          <RaisedButton className="button wide-button" primary={true} onClick={this.props.toggleEditClient}> Edit this Client </RaisedButton>
          <RaisedButton className="button wide-button" primary={true} onClick={this.props.toggleDeleteModal}> Delete this Client </RaisedButton>

      </Card>
    )
  }

}

export default ClientList;
