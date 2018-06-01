import React from 'react';
import {Card} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const AdminShow = ({ adminName, email, toggleEditAdmin, isLeadAdmin }) => {
  console.log(adminName, email)
  return (
    <Card>
      <AppBar showMenuIconButton={false} title="Admin Settings" iconElementRight={<FlatButton label="Edit My Information" onClick={toggleEditAdmin} />}/>
      <Table className="list-container">

        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn> Name: </TableRowColumn>
            <TableRowColumn>{adminName}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn> Email: </TableRowColumn>
            <TableRowColumn>{email}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn> Is Lead Admin: </TableRowColumn>
            <TableRowColumn><input type="checkbox" checked={isLeadAdmin} readOnly/></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}


export default AdminShow;
