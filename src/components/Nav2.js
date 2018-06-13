import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Nav2 = ({clickStudents, clickGroups, clickSettings, clickCourseMaterials}) => {
  return (
    <div>
      <div className="buffer"/>
      <div className="button-group">
        <RaisedButton className="wide-button" primary={true} onClick={clickGroups}>Clients and Groups</RaisedButton>
        <RaisedButton className="wide-button" primary={true} onClick={clickStudents}>Students</RaisedButton>
        <RaisedButton className="wide-button" primary={true} onClick={clickCourseMaterials}>Course Materials</RaisedButton>
        <RaisedButton className="wide-button" primary={true} onClick={clickSettings}>Settings</RaisedButton>
      </div>
    </div>
  )
}

export default Nav2;
