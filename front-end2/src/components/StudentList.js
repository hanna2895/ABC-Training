import React from 'react';

// when the user clicks on each student, it takes them to the show / edit page. they can choose to 'go back' or 'save and close', which will update the user's info
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
      <button> Add a New Student </button>
    </div>
  )
}

export default StudentList;
