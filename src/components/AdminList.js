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
import { connect } from 'react-redux';
import * as adminActions from '../actions/adminActions';


class AdminList extends Component {
  constructor() {
    super();
    this.state = {
      admins: [],
      selected: "",
      selectedAdmin: "",
      selectedAdminId: ""
    }
  }

  componentDidMount() {
    this.loadAdminList()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.admins != this.state.admins) {
      this.loadAdminList()
    }
  }

  loadAdminList = () => {
    this.props.getAdmins()
      .then(() => {
        this.setState({admins: this.props.admins.admins})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleSelect = (selectedRows, index, value) => {
    this.setState({
      selected: selectedRows,
      selectedAdminId: value.currentTarget.id
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.toggleDeleteModal(this.state.selectedAdminId)
  }

  render() {
    const admins = this.state.admins
    const ListOfAdmins = admins.map((admin, index) => {
      let id = admin.id
      return (
        <TableRow key={index} id={admin.id} selected={this.state.selectedAdminId == id ? true : false}>
          <TableRowColumn id={admin.id}>{admin.name}</TableRowColumn>
          <TableRowColumn id={admin.id}>{admin.email}</TableRowColumn>
        </TableRow>
      )
    })

    return (

      <Card className="list-container">
        <AppBar showMenuIconButton={false} title="All Admins" iconElementRight={<FlatButton label="Add New Admin" onClick={this.props.toggleAddAdmin} />} />
        <Table onCellClick={this.handleSelect}>
          <TableBody displayRowCheckbox={false}>
            {ListOfAdmins}
          </TableBody>
        </Table>
        <RaisedButton className="button wide-button" primary={true} onClick={this.handleClick}> Delete Selected Admin </RaisedButton>
      </Card>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    admins: state.admins
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAdmins: () => dispatch(adminActions.getAdmins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
