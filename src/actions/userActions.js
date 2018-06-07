import * as types from './actionTypes';

export function checkUserType(json) {
  if (json.user_type === "student")
    return {type: types.STUDENT_LOGGED, user_id: json.user_id, user_name: json.user_name}
  else if (json.user_type === "admin") {
    return {type: types.ADMIN_LOGGED, user_id: json.user_id, user_name: json.user_name}
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

export function clickLogOut() {
  return dispatch => {
    return fetch('http://localhost:3000/logout', {
      method: "GET"
    })
    .then(response => response.json())
    .then(json => dispatch(logOut(json)))
  }
}

export function logOut(json) {
  return {type: types.LOGGED_OUT}
}
