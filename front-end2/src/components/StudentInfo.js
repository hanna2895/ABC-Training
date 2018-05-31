import React from 'react';

const StudentInfo = ({studentName, email, group, password}) => {
  return (
    <div className="list-container">
      <h2> Student Information </h2>
      <div className="list-holder">
        <label> Name: </label>
        {studentName} <br />
        <label> Email: </label>
        {email} <br />
        <label> Group: </label>
        {group} <br />
        <button> Edit This Student's Information </button>
        <button> Delete This Student </button>
      </div>
    </div>
  )
}

export default StudentInfo
