import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const StudentNav = ({toggleStudentView}) => {
  return (
    <div className="button-group">
      <RaisedButton className="wide-button" primary={true} onClick={toggleStudentView}>Course Materials</RaisedButton>
      <RaisedButton className="wide-button" primary={true} onClick={toggleStudentView}>Settings</RaisedButton>
    </div>
  )
}

export default StudentNav;
