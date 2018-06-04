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
import RaisedButton from 'material-ui/RaisedButton';


const StudentInfo = ({studentName, email, group, password, toggleEditStudent, toggleDeleteModal, toggleViewStudent }) => {
  return (
    <Card className="upload-holder">
      <AppBar showMenuIconButton={false} title="Student Information" iconElementRight={<div><FlatButton label="Edit This Student" onClick={toggleEditStudent} /> <FlatButton label="Back" onClick={toggleViewStudent} /></div>}/>
      <Table>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn> Name: </TableRowColumn>
            <TableRowColumn> {studentName} </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn> Email: </TableRowColumn>
            <TableRowColumn> {email} </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn> Group: </TableRowColumn>
            <TableRowColumn> {group} </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
        <RaisedButton className="button wide-button" primary={true} onClick={toggleDeleteModal}> Delete This Student </RaisedButton>

    </Card>
  )
}

export default StudentInfo
