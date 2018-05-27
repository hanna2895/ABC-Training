import React from 'react';

const StudentList = ({ students }) => {
  const ListOfStudents = students.map((student, i) => {
    return(
      <li key={student.id}> Name: {student.name} Email: {student.email} </li>
    )
  })
  return (
    <div className="list-container">
      <h2>All Students </h2>
      <div className="list-holder">
        <ul>
          {ListOfStudents}
        </ul>
      </div>
    </div>
  )
}

export default StudentList;
