import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import * as adminActions from '../actions/adminActions';

class AdminShow extends Component {
  constructor() {
    super();
    this.state = {
      adminName: "",
      email: "",
      isLeadAdmin: ""
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     adminName: nextProps.adminName,
  //     email: nextProps.email,
  //     isLeadAdmin: nextProps.isLeadAdmin
  //   })
  // }

  render() {
    return (
      <Card>
        <AppBar showMenuIconButton={false} title="Admin Settings" iconElementRight={<FlatButton label="Edit My Information" onClick={this.props.toggleEditAdmin} />}/>
        <Table className="list-container">

          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn> Name: </TableRowColumn>
              <TableRowColumn>{this.props.name}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn> Email: </TableRowColumn>
              <TableRowColumn>{this.props.email}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn> Is Lead Admin: </TableRowColumn>
              <TableRowColumn><input type="checkbox" checked={this.props.isLeadAdmin} readOnly/></TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.admins.admin_name,
    email: state.admins.admin_email,
    isLeadAdmin: state.admins.admin_isLeadAdmin
  }
}

export default connect(mapStateToProps)(AdminShow);
