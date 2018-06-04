import React from 'react';
import {Card} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const GroupInfo = ({ groupName, clientName, toggleEditGroup, toggleDeleteModal }) => {

  // console.log(group)
  return (
    <Card className="list-container">
      <AppBar title="Group Details" showMenuIconButton={false}  />}/>
      <Table>
        <TableBody displayRowCheckbox={false}>
          <TableRow >
            <TableRowColumn> Group Name: </TableRowColumn>
            <TableRowColumn> {groupName} </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn> Belongs to: </TableRowColumn>
            <TableRowColumn> {clientName} </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

      <RaisedButton className="button wide-button" primary={true} onClick={toggleEditGroup}> Edit This Group </RaisedButton>
      <RaisedButton className="button wide-button" primary={true} onClick={toggleDeleteModal}> Delete This Group </RaisedButton>

    </Card>
    )
}

export default GroupInfo;
