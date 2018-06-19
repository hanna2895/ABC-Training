import * as types from './actionTypes'

// GET ALL THE STUDENTS
export function getStudents() {
  return dispatch => {
    return fetch("https://protected-reaches-40551.herokuapp.com/students", {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(json => dispatch(returnStudents(json)))
  }
}

function returnStudents(json){
  console.log(json,' this is json')
  console.log(json.students, 'this is json.students')
  return {type: types.GET_STUDENTS, students: json.students}
}
