import * as types from './actionTypes';

// export function checkLoginSuccess() {
//   // console.log(json, "this is the json returned from login")
//   return {type: types.LOG_IN}
// }

export function checkUserType(json) {
  console.log(json, 'this is json returned in checkUserType')
  if (json.user_type === "student")
    return {type: types.STUDENT_LOGGED}
  else if (json.user_type === "admin") {
    return {type: types.ADMIN_LOGGED}
  }
}

export function logIn(email, password) {
    console.log(email, password)
  return dispatch => {
    console.log(password, ' this is password')
    return fetch('http://localhost:3000/login', {
      method: "POST",
      // credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(json => dispatch(checkUserType(json)))
    // .then(() => dispatch(checkLoginSuccess()))
  }
}
