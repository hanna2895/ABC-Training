import * as types from './actionTypes';

export function checkUserType(json) {
  if (json.user_type === "student")
    return {type: types.STUDENT_LOGGED}
  else if (json.user_type === "admin") {
    return {type: types.ADMIN_LOGGED}
  } else {
    return {type: types.LOGIN_FAILED}
  }
}

export function logIn(email, password) {
  return dispatch => {
    return fetch('http://localhost:3000/login', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(json => dispatch(checkUserType(json)))
  }
}
