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

class GroupList extends Component {
  constructor() {
    super();
    this.state = {
      selectedGroup: "",
      selectedGroupId: ""
    }
  }

  handleSelect = (selectedRows, index, value) => {
    // console.log(e.target, 'this is e.target')
    // const groupId = e.target.id;
    // console.log(groupId, 'groupId')
    // const group = e.target.innerHTML
    // console.log(group, 'group')
    // this.props.toggleGroupShow(group, groupId)
    console.log(value.currentTarget)
    const id = value.currentTarget.id
    this.setState({
      selectedGroupId: id
    })
  }

  handleViewClick = (e) => {
    e.preventDefault();
    console.log('edit group button clicked')
    this.props.toggleGroupShow(this.state.selectedGroup, this.state.selectedGroupId)
  }



  handleClick = (e) => {
    e.preventDefault();
    console.log('this is being clicked')
    if(this.props.selectedClient !== "") {
      this.props.toggleAddGroup();
    } else {
      // toggle a modal or something to say that you must first select a client to create a new group
      // alert("You must select a client first before creating a new group.")
    }
  }

  render() {
    console.log(this.state, 'this is state')
    console.log(this.props.groups)
    const ListOfGroups = this.props.groups.map((group, i) => {
      let id = group.id
      return (
        <TableRow key={i} id={group.id} selected={this.state.selectedGroupId == id ? true : false}>
          <TableRowColumn id={group.id}>{group.name} </TableRowColumn>
        </TableRow>
      )
    })
    return (
      <Card className="list-container">
        <AppBar title="Groups" showMenuIconButton={false} iconElementRight={<FlatButton label="Add New Group" onClick={this.handleClick} />}/>
        <Table  onCellClick={this.handleSelect}>
          <TableBody  displayRowCheckbox={false}>

            {ListOfGroups}

          </TableBody>
        </Table>
        <RaisedButton className="button wide-button" primary={true} onClick={this.handleViewClick}> View Group Details </RaisedButton>
      </Card>
    )
  }

}

export default GroupList;
