import React, { Component } from 'react';

const StudentNav = ({toggleStudentView}) => {
  return (
    <div className="button-group">
      <button onClick={toggleStudentView}>Course Materials</button>
      <button onClick={toggleStudentView}>Settings</button>
    </div>
  )
}

export default StudentNav;
